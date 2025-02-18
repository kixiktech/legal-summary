
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Button } from '@/components/ui/button';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const GenerateHeadshots = () => {
  const [generating, setGenerating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getGenderFromName = (name: string) => {
    const firstNames = {
      'Sarah': 'female', 'Michael': 'male', 'Jennifer': 'female',
      'David': 'male', 'Rachel': 'female', 'Marcus': 'male',
      'Patricia': 'female', 'Andrew': 'male', 'Lisa': 'female',
      'Robert': 'male', 'Elena': 'female', 'James': 'male',
      'Michelle': 'female', 'Benjamin': 'male', 'Caroline': 'female',
      'Daniel': 'male', 'Rebecca': 'female', 'Thomas': 'male',
      'Maria': 'female', 'Kevin': 'male'
    };
    const firstName = name.split(' ')[0];
    return firstNames[firstName as keyof typeof firstNames] || 'male';
  };

  const generateHeadshot = async (name: string, role: string) => {
    try {
      const gender = getGenderFromName(name);
      const { data: generatedData, error: generateError } = await supabase.functions
        .invoke('generate-headshot', {
          body: { name, gender, role }
        });

      if (generateError) throw generateError;

      const imageUrl = generatedData.output[0];
      if (!imageUrl) throw new Error('No image generated');

      // Download the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Upload to Supabase Storage
      const fileName = `${name.toLowerCase().replace(/\s+/g, '-')}-headshot.png`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('headshots')
        .upload(fileName, blob, {
          contentType: 'image/png',
          upsert: true
        });

      if (uploadError) throw uploadError;

      console.log('Uploaded:', uploadData);
      return uploadData.path;
    } catch (error) {
      console.error('Error generating headshot:', error);
      throw error;
    }
  };

  const generateAll = async () => {
    setGenerating(true);
    try {
      for (let i = currentIndex; i < testimonials.length; i++) {
        const testimonial = testimonials[i];
        setCurrentIndex(i);
        const [name, role] = testimonial.author.split(',');
        await generateHeadshot(name, role?.trim() || 'Lawyer');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
      }
    } catch (error) {
      console.error('Error in generation:', error);
    } finally {
      setGenerating(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={generateAll}
        disabled={generating}
      >
        {generating 
          ? `Generating ${currentIndex + 1}/${testimonials.length}...` 
          : 'Generate Headshots'}
      </Button>
    </div>
  );
};

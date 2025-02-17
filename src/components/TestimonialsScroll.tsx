
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I had no idea how much fun checking weather can be. Also, it has lots of valuable insights and guidance in it.",
    author: "Natasha Jackson",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 2,
    quote: "This app has revolutionized how I look at forecasts. It's more engaging and being part of the community is better than I expected.",
    author: "James Bearman",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  // ... Add more testimonials to reach 20
];

const TestimonialsScroll = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-black/50 py-20 overflow-hidden">
      <div className="container px-6 mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
          Join thousands of legal professionals who trust our platform
        </p>
      </div>
      
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-6 animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-none w-[400px] p-6 glass-card rounded-xl"
            >
              <p className="text-lg mb-6 text-white/90">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-primary">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsScroll;

import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TestimonialTrack } from "./TestimonialTrack";
import { testimonials } from "@/data/testimonials";
const TestimonialsScroll = () => {
  const isMobile = useIsMobile();
  const [isPaused, setIsPaused] = useState(false);
  return <section className="relative w-full bg-gradient-to-b from-black to-black/90 py-24">
      <div className="container mx-auto mb-16">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Trusted by the Best</h2>
          <p className="text-lg text-gray-400">
            Join thousands of legal professionals who trust our platform
          </p>
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
        
        {/* Scrolling Track */}
        <div className={`flex gap-4 md:gap-8 ${isMobile ? 'animate-carousel-mobile' : 'animate-carousel'}`} onMouseEnter={() => setIsPaused(true)} onTouchStart={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchEnd={() => setIsPaused(false)} style={{
        animationPlayState: isPaused ? 'paused' : 'running'
      }}>
          <TestimonialTrack testimonials={testimonials} />
          <TestimonialTrack testimonials={testimonials} isClone />
        </div>
      </div>
    </section>;
};
export default TestimonialsScroll;
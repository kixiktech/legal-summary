
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = "" }) => {
  return (
    <div
      className={`relative w-[260px] md:w-[400px] shrink-0 bg-gradient-to-b from-gray-900/50 to-gray-900/30 
      rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden group ${className}`}
    >
      <div className="relative p-4 md:p-8 flex flex-col justify-between h-[240px] md:h-[320px]">
        <blockquote className="mb-4">
          <p className="text-xs md:text-base text-gray-300 leading-relaxed line-clamp-6 md:line-clamp-none">
            {testimonial.quote}
          </p>
        </blockquote>
        
        <footer className="mt-auto pt-3 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 md:h-12 md:w-12 ring-2 ring-primary/20">
              <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {testimonial.author[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <cite className="text-xs md:text-base not-italic font-semibold text-primary tracking-tight">
                {testimonial.author.split(',')[0]}
              </cite>
              <span className="text-[10px] md:text-sm text-gray-400">
                {testimonial.author.split(',')[1]?.trim()}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

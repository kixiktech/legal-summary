
import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Testimonial } from "@/types/testimonial";

interface TestimonialTrackProps {
  testimonials: Testimonial[];
  isClone?: boolean;
}

export const TestimonialTrack: React.FC<TestimonialTrackProps> = ({ testimonials, isClone = false }) => {
  return (
    <div className="flex gap-4 md:gap-8 shrink-0">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={`${testimonial.id}${isClone ? '-clone' : ''}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
};

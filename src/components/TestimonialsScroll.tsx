
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
    quote: "This deposition summarizer has completely transformed my preparation process. What used to take me 6-8 hours now takes less than an hour, and the insights are incredibly detailed.",
    author: "Sarah Mitchell, Esq.",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 2,
    quote: "As a litigation partner, time is everything. This tool doesn't just summarize - it identifies key contradictions and patterns I might have missed. It's like having an extra associate on the team.",
    author: "Michael Rodriguez, Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 3,
    quote: "The automated summaries are consistently thorough and accurate. I've caught several crucial details that would have taken hours to find manually. Absolute game-changer for case preparation.",
    author: "Jennifer Chen, Trial Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 4,
    quote: "Finally, a legal tech tool that delivers on its promises. The time saved on deposition review has allowed me to take on more cases while maintaining the highest level of preparation.",
    author: "David Thompson, Legal Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 5,
    quote: "Not only does it save time, but the quality of insights is remarkable. It's helped me identify patterns across multiple depositions that proved crucial in several cases.",
    author: "Rachel Goldstein, Senior Counsel",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 6,
    quote: "The platform's ability to cross-reference multiple depositions has been invaluable. I discovered inconsistencies that became pivotal points in my cross-examination strategy.",
    author: "Marcus Powell, Litigation Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 7,
    quote: "In my 20 years of practice, this is the most impactful tool I've encountered. The time savings alone justified the investment, but the strategic insights it provides are priceless.",
    author: "Patricia Walsh, Trial Lawyer",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 8,
    quote: "As a small firm owner, efficiency is crucial. This tool has transformed how we handle complex cases, allowing us to compete with larger firms while maintaining work-life balance.",
    author: "Andrew Kim, Managing Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 9,
    quote: "The summary quality is exceptional. It captures nuances I might have missed after hours of reading. It's like having a brilliant assistant who never misses a detail.",
    author: "Lisa Martinez, Defense Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 10,
    quote: "We've implemented this across our entire litigation department. The consistency in deposition analysis has improved our case preparation significantly.",
    author: "Robert Chang, Legal Director",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 11,
    quote: "The platform's ability to highlight key themes and patterns across multiple witnesses has been revolutionary for building our case narratives.",
    author: "Elena Vetrova, Civil Litigator",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 12,
    quote: "I was skeptical at first, but this tool has become indispensable. It's not just about time savings - it's about uncovering insights that strengthen our cases.",
    author: "James O'Connor, Senior Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 13,
    quote: "This platform has revolutionized our deposition prep process. The automated summaries are incredibly accurate, and the time saved is substantial.",
    author: "Michelle Torres, Trial Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 14,
    quote: "The ROI is undeniable. We've cut our deposition review time by 75% while catching more critical details. It's transformed how we handle complex litigation.",
    author: "Benjamin Foster, Managing Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 15,
    quote: "The insight extraction is phenomenal. It doesn't just summarize - it helps identify strategic opportunities we might have missed in traditional review.",
    author: "Caroline Wu, Litigation Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 16,
    quote: "For complex cases with multiple depositions, this tool is a lifesaver. It helps connect dots across testimonies that would take days to identify manually.",
    author: "Daniel Blackwood, Defense Counsel",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 17,
    quote: "The efficiency gains are remarkable. What used to take my team days now takes hours, and the quality of analysis has actually improved.",
    author: "Rebecca Stern, Legal Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 18,
    quote: "This platform has given our firm a competitive edge. The speed and accuracy of deposition analysis help us better serve our clients while growing our practice.",
    author: "Thomas Wright, Trial Lawyer",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 19,
    quote: "The time saved on deposition review has allowed us to focus more on strategy and client interaction. It's an essential tool for modern litigation practice.",
    author: "Maria Santos, Senior Attorney",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  },
  {
    id: 20,
    quote: "After using this tool, I can't imagine going back to manual deposition review. The insights and efficiency gains have been transformative for our practice.",
    author: "Kevin Palmer, Litigation Partner",
    avatar: "/lovable-uploads/47f45f98-de21-42ae-8b61-dd8064c0ad6b.png"
  }
];

const TestimonialsScroll = () => {
  return (
    <div className="w-full bg-black/95 py-20 overflow-hidden">
      <div className="container px-6 mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6 text-white">
          What Our Users Say
        </h2>
        <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto">
          Join thousands of legal professionals who trust our platform
        </p>
      </div>
      
      <div className="relative w-full mx-auto max-w-[95vw]">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/95 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/95 to-transparent z-10" />
        
        <div className="relative flex overflow-x-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-[450px] p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-primary">{testimonial.author}</span>
                    <span className="text-sm text-gray-400">{testimonial.author.split(',')[1]?.trim()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-8 animate-marquee2 whitespace-nowrap py-4">
            {testimonials.map((testimonial) => (
              <div
                key={`${testimonial.id}-clone`}
                className="flex-none w-[450px] p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-primary">{testimonial.author}</span>
                    <span className="text-sm text-gray-400">{testimonial.author.split(',')[1]?.trim()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsScroll;

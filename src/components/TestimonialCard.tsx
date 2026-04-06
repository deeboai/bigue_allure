import { ScrollReveal } from '@/components/ScrollReveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
}

export function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <ScrollReveal>
      <div className="bg-card p-6 md:p-8 rounded-sm border border-border">
        <p className="font-heading text-base md:text-lg italic text-foreground leading-relaxed mb-6">
          "{quote}"
        </p>
        <div>
          <p className="text-sm font-body font-medium text-foreground">{author}</p>
          {location && <p className="text-xs font-body text-muted-foreground mt-0.5">{location}</p>}
        </div>
      </div>
    </ScrollReveal>
  );
}

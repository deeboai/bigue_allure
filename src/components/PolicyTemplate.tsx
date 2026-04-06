import { ReactNode } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface PolicyTemplateProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function PolicyTemplate({ title, lastUpdated, children }: PolicyTemplateProps) {
  return (
    <ScrollReveal className="section-padding py-16 md:py-24 max-w-3xl mx-auto">
      <div>
        <h1 className="heading-lg mb-4">{title}</h1>
        <p className="body-sm mb-12">Last updated: {lastUpdated}</p>
        <div className="prose prose-sm max-w-none space-y-6 font-body text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}

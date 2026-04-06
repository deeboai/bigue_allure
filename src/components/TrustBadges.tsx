import { Leaf, Heart, Gift, Star, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const badges = [
  { icon: Leaf, title: 'Heritage-Inspired', description: 'Rooted in generations of Senegalese beauty wisdom' },
  { icon: Heart, title: 'Made with Care', description: 'Each product is thoughtfully crafted and curated' },
  { icon: Star, title: 'Everyday Ritual', description: 'Designed to elevate your daily self-care moments' },
  { icon: Shield, title: 'Premium Quality', description: 'Only the finest ingredients and materials' },
  { icon: Gift, title: 'Beautiful Gifting', description: 'Perfect for someone special — or for yourself' },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
      {badges.map((badge) => (
        <ScrollReveal key={badge.title}>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-secondary flex items-center justify-center">
              <badge.icon size={20} className="text-primary" />
            </div>
            <h4 className="text-sm font-heading text-foreground">{badge.title}</h4>
            <p className="text-xs font-body font-light text-muted-foreground leading-relaxed">{badge.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

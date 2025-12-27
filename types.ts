import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Speaker {
  name: string;
  affiliation: string;
  image: string;
  topic?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: 'past' | 'active' | 'future';
}

export interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  category: string;
  priceLocal: string;
  priceIntl: string;
  features: string[];
  recommended?: boolean;
}
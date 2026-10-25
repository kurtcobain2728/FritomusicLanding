export interface ShowcaseSlide {
  id: number;
  tabLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  screenTitle: string;
  screenshotUrl?: string;
}

export interface FeatureCardItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  telemetry: string;
  staggerClass: string;
}

export interface SpecItem {
  label: string;
  value: string;
  staggerClass: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  staggerClass: string;
}

export interface StatItem {
  value: string;
  label: string;
}

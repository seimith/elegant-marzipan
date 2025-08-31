// TypeScript interfaces for marketing copy content

export interface NavLink {
  text: string;
  href: string;
}

export interface CtaButton {
  text: string;
  href: string;
}

export interface CtaPair {
  primary: CtaButton;
  secondary: CtaButton;
}

export interface NavContent {
  logo: string;
  links: NavLink[];
  cta: CtaPair;
}

export interface HeroFeature {
  title: string;
  desc: string;
}

export interface HeroContent {
  badge?: string;
  headline?: string;
  heading?: string; // Alternative to headline in some copy sets
  subhead?: string;
  subheading?: string; // Alternative to subhead in some copy sets
  cta: CtaPair | {
    primary: string | CtaButton;
    secondary: string | CtaButton;
  };
  features?: HeroFeature[];
}

export interface ProblemSolutionPoint {
  title: string;
  points: string[];
}

export interface ProblemSolutionContent {
  heading: string;
  tagline?: string;
  problem: ProblemSolutionPoint;
  solution: ProblemSolutionPoint;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  tagline?: string;
  heading: string;
  description?: string;
  steps: HowItWorksStep[];
}

export interface FeatureItem {
  title: string;
  description?: string;
  desc?: string;
  icon?: string;
}

export interface FeaturesContent {
  tagline?: string;
  heading: string;
  subheading?: string;
  description?: string;
  items?: FeatureItem[];
  featureList?: FeatureItem[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  image?: string;
}

export interface TestimonialContent {
  tagline?: string;
  heading: string;
  description?: string;
  testimonials?: TestimonialItem[];
  items?: TestimonialItem[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: CtaButton;
  popular?: boolean;
  highlight?: boolean;
  featured?: boolean;
}

export interface PricingContent {
  tagline?: string;
  heading: string;
  description?: string;
  subheading?: string;
  footnote?: string;
  tiers?: PricingTier[];
  plans?: Array<PricingTier | {
    name: string;
    price: string | number;
    period?: string;
    description: string;
    features: string[];
    featured?: boolean;
    popular?: boolean;
    highlight?: boolean;
    cta: string | CtaButton;
  }>;
}

export interface ClosingContent {
  tagline?: string;
  heading: string;
  description?: string;
  cta: CtaPair | {
    primary: string | CtaButton;
    secondary: string | CtaButton;
  };
  footnote?: string;
  stats?: Array<{ number: string; label: string }>;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLegal {
  copyright: string;
  links: FooterLink[];
}

export interface FooterContent {
  companyName: string;
  tagline?: string;
  description?: string;
  columns?: FooterColumn[];
  links?: FooterSection[];
  socialLinks?: FooterLink[];
  legal: FooterLegal;
}

export interface CopyContentType {
  nav?: NavContent;
  hero?: HeroContent;
  problemSolution?: ProblemSolutionContent;
  howItWorks?: HowItWorksContent;
  features?: FeaturesContent;
  testimonial?: TestimonialContent;
  testimonials?: TestimonialContent;
  pricing?: PricingContent;
  closing?: ClosingContent;
  footer?: FooterContent;
  [key: string]: unknown; // For backward compatibility
}

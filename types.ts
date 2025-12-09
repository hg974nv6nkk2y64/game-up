export enum Category {
  MODS = 'Mods',
  TOOLS = 'Tools',
  HOSTING = 'Hosting',
  VPN = 'VPN',
  RESOURCE_PACKS = 'Resource Packs'
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Review {
  rating: number; // 0-10
  pros: string[];
  cons: string[];
  verdict: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  rating: number; // 0-5 stars
  reviewCount: number;
  features: string[];
  affiliateLink: string;
  detailedReview?: Review;
  compatibility?: string[];
  lastUpdated?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: Author;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

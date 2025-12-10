export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: Date;
  lastUpdated: Date;
  readTime: number; // in minutes
  category: BlogCategory;
  tags: string[];
  featuredImage?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  relatedServices: string[];
  relatedPosts: string[];
}

export type BlogCategory =
  | 'pain-relief'
  | 'sports-injury'
  | 'home-care'
  | 'exercises'
  | 'conditions'
  | 'wellness'
  | 'recovery-tips';

export interface BlogCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
}

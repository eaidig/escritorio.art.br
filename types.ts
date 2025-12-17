export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Users' | 'Heart' | 'Briefcase' | 'FileText' | 'Accessibility';
}

export interface Project {
  id: string;
  year: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  type: string;
  title: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}
import React from 'react';
import { 
  Users, 
  Heart, 
  Briefcase, 
  FileText, 
  Accessibility, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  Filter
} from 'lucide-react';

export const IconMap = {
  Users,
  Heart,
  Briefcase,
  FileText,
  Accessibility,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Filter
};

export type IconName = keyof typeof IconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  return <IconComponent className={className} size={size} />;
};
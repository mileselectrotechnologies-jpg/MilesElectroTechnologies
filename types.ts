// Fix: Added missing React import to resolve 'React' namespace for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  description: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', noPadding = false }) => {
  return (
    <section id={id} className={`relative w-full ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};
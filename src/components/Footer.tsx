import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DebtBow. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Making medical forgiveness your financial superpower.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
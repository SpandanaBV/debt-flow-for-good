import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive('/') ? 'text-gold' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/learn-more" 
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive('/learn-more') ? 'text-gold' : 'text-muted-foreground'
              }`}
            >
              Learn More
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive('/about') ? 'text-gold' : 'text-muted-foreground'
              }`}
            >
              About Us
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/start-impact">
              <Button variant="default" className="bg-gradient-gold text-white hover:opacity-90 font-semibold">
                Start Your Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
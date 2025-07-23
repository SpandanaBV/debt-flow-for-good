import React from 'react';
import { Card } from '@/components/ui/card';

const LightModeShowcase: React.FC = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Enhanced Light Mode Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Beautiful, professional design optimized for both dark and light themes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 bg-gradient-gold border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Gold Accent</h3>
            <p className="text-white/90">
              Enhanced contrast and vibrancy for light mode
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-trading border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Trading Blue</h3>
            <p className="text-white/90">
              Optimized gradients that work beautifully in light mode
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-forgiveness border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Forgiveness Purple</h3>
            <p className="text-white/90">
              Perfect readability and visual appeal across themes
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LightModeShowcase;
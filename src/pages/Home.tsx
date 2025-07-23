import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              DebtBow
            </h1>
            
            <p className="text-xl md:text-2xl text-gold-bright mb-8 font-medium">
              Making medical forgiveness your financial superpower.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Turn medical debt into a liquid, tradable, and forgivable asset class — where profit meets purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/learn-more">
                <Button size="lg" className="bg-gradient-gold text-primary-dark hover:opacity-90 font-semibold px-8">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-primary-dark px-8">
                  About Us
                </Button>
              </Link>
              
              <Link to="/start-impact">
                <Button size="lg" className="bg-gradient-gold text-white hover:opacity-90 font-semibold px-8">
                  Start Your Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-30">
          <div className="w-1 h-1 bg-trading-light rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-25">
          <div className="w-1.5 h-1.5 bg-forgiveness-light rounded-full animate-pulse" />
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Healthcare Finance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              DebtBow creates the first liquid, impact-first market for medical debt
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-forgiveness border-0 hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Forgive Debt</h3>
              <p className="text-white/90">
                Wipe out debt, lift lives, and earn meaningful tax relief
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-trading border-0 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Trade Impact</h3>
              <p className="text-white/90">
                Align your portfolio with purpose and ESG upside
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-gold border-0 hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 text-primary-dark mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Resell Assets</h3>
              <p className="text-primary-dark/90">
                Flip for profit while staying mission-driven
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
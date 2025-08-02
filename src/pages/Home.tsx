import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Cream Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 dark:from-background dark:to-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-orange-100/30 dark:via-background/5 dark:to-background/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-xl animate-float animation-delay-200" />
          <div className="absolute top-1/4 right-20 w-24 h-24 bg-trading/10 rounded-full blur-lg animate-bounce-gentle animation-delay-400" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-trading/10 rounded-full blur-lg animate-pulse-slow animation-delay-600" />
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gold/5 rounded-full blur-xl animate-float animation-delay-800" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-fade-in transform hover:scale-105 transition-transform duration-300">
              DebtBow
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground dark:text-gold-bright mb-8 font-medium animate-fade-in animation-delay-200 transform translate-y-4 opacity-0 [animation-fill-mode:forwards]">
              Making medical forgiveness your financial superpower.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 dark:text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400 transform translate-y-4 opacity-0 [animation-fill-mode:forwards]">
              Turn medical debt into a liquid, tradable, and forgivable asset class — where profit meets purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up animation-delay-600">
              <Link to="/learn-more">
                <Button size="lg" className="bg-foreground/20 backdrop-blur-sm text-foreground border border-foreground/30 hover:bg-foreground/30 hover:scale-105 transition-all duration-300 font-semibold px-8 shadow-lg dark:bg-white/20 dark:text-white dark:border-white/30 dark:hover:bg-white/30">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-foreground/50 text-foreground hover:bg-foreground/20 hover:scale-105 transition-all duration-300 px-8 backdrop-blur-sm dark:border-white/50 dark:text-white dark:hover:bg-white/20">
                  About Us
                </Button>
              </Link>
              
              <Link to="/start-impact">
                <Button size="lg" className="bg-gradient-gold text-primary-dark hover:opacity-90 font-semibold px-8 hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 left-1/4 opacity-30 animate-float animation-delay-300">
          <div className="w-3 h-3 bg-gold rounded-full shadow-lg" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-40 animate-bounce-gentle animation-delay-500">
          <div className="w-2 h-2 bg-trading-light rounded-full shadow-md" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-35 animate-pulse-slow animation-delay-700">
          <div className="w-2.5 h-2.5 bg-trading-light rounded-full shadow-lg" />
        </div>
        <div className="absolute top-1/2 left-1/6 opacity-25 animate-float animation-delay-900">
          <div className="w-1.5 h-1.5 bg-gold-bright rounded-full" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-30 animate-bounce-gentle animation-delay-1000">
          <div className="w-4 h-4 bg-trading rounded-full blur-sm" />
        </div>
      </section>

      {/* Features Preview - Blue Background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-background dark:to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-foreground animate-slide-in-up">
              Transform Healthcare Finance
            </h2>
            <p className="text-xl text-white/80 dark:text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              DebtBow creates the first liquid, impact-first market for medical debt
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-gold border-0 hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in animation-delay-200 group shadow-2xl">
              <Heart className="h-12 w-12 text-black dark:text-black mx-auto mb-4 group-hover:animate-bounce-gentle transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-black dark:text-black mb-3 group-hover:text-black transition-colors duration-300">Forgive It</h3>
              <p className="text-black dark:text-black group-hover:text-black transition-colors duration-300">
                Wipe out debt. Lift a life. Earn tax relief. Transform someone's financial burden into your tax advantage while creating real social impact.
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-trading border-0 hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-fade-in animation-delay-400 group shadow-2xl">
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4 group-hover:animate-bounce-gentle transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">Trade Impact</h3>
              <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                Align your portfolio with purpose and ESG upside
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-gold border-0 hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in animation-delay-600 group shadow-2xl">
              <Users className="h-12 w-12 text-black dark:text-primary-dark mx-auto mb-4 group-hover:animate-bounce-gentle transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-black dark:text-primary-dark mb-3 group-hover:text-white transition-colors duration-300">Resell Assets</h3>
              <p className="text-black/90 dark:text-primary-dark/90 group-hover:text-white/90 transition-colors duration-300">
                Flip for profit while staying mission-driven
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - Cream Background */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-background dark:to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-foreground">
              How DebtBow Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
              Simple steps to transform medical debt into financial opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in animation-delay-200">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-primary-dark">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-foreground">Acquire Debt</h3>
              <p className="text-slate-600 dark:text-muted-foreground text-sm">
                Purchase medical debt via our secure platform
              </p>
            </div>
            
            <div className="text-center animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-black dark:text-black">Choose Action</h3>
              <p className="text-black dark:text-black text-sm">
                Decide to forgive, trade, or resell
              </p>
            </div>
            
            <div className="text-center animate-fade-in animation-delay-600">
              <div className="w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-black dark:text-black">Execute</h3>
              <p className="text-black dark:text-black text-sm">
                Complete transactions with full transparency
              </p>
            </div>
            
            <div className="text-center animate-fade-in animation-delay-800">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-primary-dark">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-foreground">Track Impact</h3>
              <p className="text-slate-600 dark:text-muted-foreground text-sm">
                Monitor returns and social impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Blue Background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-card dark:to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-foreground">
              Making Real Impact
            </h2>
            <p className="text-xl text-white/80 dark:text-muted-foreground max-w-2xl mx-auto">
              Join a growing movement that's changing healthcare finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 dark:bg-card/20 backdrop-blur-sm rounded-xl p-8 animate-fade-in animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">$1.2M+</div>
              <p className="text-white/90 dark:text-muted-foreground">Medical debt ready for impact</p>
            </div>
            
            <div className="text-center bg-white/10 dark:bg-card/20 backdrop-blur-sm rounded-xl p-8 animate-fade-in animation-delay-400">
              <div className="text-4xl md:text-5xl font-bold text-trading-light mb-2">500+</div>
              <p className="text-white/90 dark:text-muted-foreground">Early supporters joined</p>
            </div>
            
            <div className="text-center bg-white/10 dark:bg-card/20 backdrop-blur-sm rounded-xl p-8 animate-fade-in animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold text-gold-bright mb-2">85%</div>
              <p className="text-white/90 dark:text-muted-foreground">Average debt reduction achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Cream Background */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-card dark:to-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-foreground animate-slide-in-up">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-slate-600 dark:text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              Join the financial revolution that puts purpose at the center of profit
            </p>
            <Link to="/start-impact">
              <Button size="lg" className="bg-gradient-gold text-primary-dark hover:opacity-90 font-semibold px-12 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                Get Started Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, TrendingUp, RefreshCw, Target, BarChart3, Shield } from 'lucide-react';

const LearnMore: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* What is DebtBow Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
              What is DebtBow?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              DebtBow is a healthcare fintech platform that transforms medical debt into a strategic financial asset. 
              We empower users to buy, trade, or forgive medical debt, creating a new marketplace where social impact 
              and financial returns align.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Can Do With Medical Debt
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-forgiveness border-0 hover:scale-105 transition-all duration-300">
              <Heart className="h-16 w-16 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Forgive It</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Wipe out debt. Lift a life. Earn tax relief. Transform someone's financial burden into your tax advantage while creating real social impact.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-trading border-0 hover:scale-105 transition-all duration-300">
              <TrendingUp className="h-16 w-16 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Trade It</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Align your portfolio with purpose — and ESG upside. Build a diversified asset base that generates returns while driving social change.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-gold border-0 hover:scale-105 transition-all duration-300">
              <RefreshCw className="h-16 w-16 text-primary-dark mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Resell It</h3>
              <p className="text-primary-dark/90 text-lg leading-relaxed">
                Flip for profit. Fuel impact. Stay mission-driven. Create liquidity in the market while maintaining focus on positive outcomes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* DebtFlow Protocol Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The DebtFlow Protocol
            </h2>
            <p className="text-xl text-muted-foreground">
              A transparent, step-by-step process to maximize impact and returns
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: "1",
                  title: "Acquire",
                  description: "Acquire medical debt via our platform",
                  icon: Target,
                  gradient: "bg-gradient-trading"
                },
                {
                  step: "2",
                  title: "Choose",
                  description: "Choose your action: Forgive, Trade, or Resell",
                  icon: BarChart3,
                  gradient: "bg-gradient-forgiveness"
                },
                {
                  step: "3",
                  title: "Execute",
                  description: "Execute with full transparency",
                  icon: Shield,
                  gradient: "bg-gradient-gold"
                },
                {
                  step: "4",
                  title: "Track",
                  description: "Track your tax benefits, returns, or impact reports",
                  icon: TrendingUp,
                  gradient: "bg-gradient-trading"
                },
                {
                  step: "5",
                  title: "Repeat",
                  description: "Repeat or redeploy capital",
                  icon: RefreshCw,
                  gradient: "bg-gradient-forgiveness"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 rounded-xl bg-background border border-border hover:border-gold transition-colors">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-gold">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {item.description}
                    </p>
                  </div>
                  {index < 4 && (
                    <ArrowRight className="h-6 w-6 text-gold flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Ready to Transform Healthcare Finance?
          </h2>
          <Link to="/start-impact">
            <Button size="lg" className="bg-gradient-gold text-primary-dark hover:opacity-90 font-semibold px-12">
              Start Your Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
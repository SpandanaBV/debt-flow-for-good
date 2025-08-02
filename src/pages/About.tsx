import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, TrendingUp, Users, Award, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Mission Section - Cream Background */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-background dark:to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent animate-fade-in">
              About DebtBow
            </h1>
            <div className="bg-white/70 dark:bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-xl animate-scale-in animation-delay-200">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800 dark:text-foreground">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-muted-foreground leading-relaxed">
                We're building the first liquid, impact-first market for medical debt — because freedom from debt 
                shouldn't be a luxury, and forgiving it shouldn't just be charity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Blue Background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-card dark:to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-foreground">
              Meet Our Founders
            </h2>
            <p className="text-xl text-white/80 dark:text-muted-foreground">
              Visionaries at the intersection of healthcare and finance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Eshanika */}
            <Card className="p-8 bg-white/10 dark:bg-gradient-to-br dark:from-card dark:to-secondary/20 border-white/20 dark:border-border hover:border-gold hover:scale-105 transition-all duration-300 backdrop-blur-sm animate-fade-in animation-delay-200">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce-gentle animation-delay-400">
                  <span className="text-2xl font-bold text-primary-dark">ES</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white dark:text-foreground">Eshanika Sreekanth Urs</h3>
                  <p className="text-gold font-semibold mb-4">Co-Founder, Strategy & Product</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-trading text-trading bg-trading/10">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Brown University
                    </Badge>
                    <Badge variant="outline" className="border-trading text-trading bg-trading/10">
                      <Award className="w-3 h-3 mr-1" />
                      Biomedical Design
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold bg-gold/10">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Business Economics
                    </Badge>
                  </div>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed mb-4">
                    Senior at Brown University studying Biomedical Design Engineering and Business Economics, 
                    with a thesis on Medicare privatization. DebtBow is her brainchild, a bold push to make 
                    medical debt forgivable, tradable, and profitable.
                  </p>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed mb-4">
                    A former M&A intern at PwC, EY Consulting summer associate, and EMT ER–trained, she operates 
                    at the intersection of healthcare and finance. In leadership roles, she has led cross-functional 
                    teams and 150+ member initiatives, aligning people, systems, and outcomes.
                  </p>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed">
                    Eshanika brings a founder's instinct, a policymaker's lens, and an operator's discipline – 
                    driving strategy, partnerships, and product design at DebtBow.
                  </p>
                </div>
              </div>
            </Card>

            {/* Shreya */}
            <Card className="p-8 bg-white/10 dark:bg-gradient-to-br dark:from-card dark:to-secondary/20 border-white/20 dark:border-border hover:border-gold hover:scale-105 transition-all duration-300 backdrop-blur-sm animate-fade-in animation-delay-400">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-trading rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce-gentle animation-delay-600">
                  <span className="text-2xl font-bold text-white">SK</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white dark:text-foreground">Shreya Dilip Kini</h3>
                  <p className="text-gold font-semibold mb-4">Co-Founder, Strategy & Product</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-trading text-trading bg-trading/10">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Babson College
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold bg-gold/10">
                      <Award className="w-3 h-3 mr-1" />
                      MS Finance
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold bg-gold/10">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Financial Planning
                    </Badge>
                  </div>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed mb-4">
                    Graduate in International Accounting and Finance, currently pursuing her Master of Science 
                    in Finance at Babson College. DebtBow is her vision, an ambitious move to make medical debt 
                    investable, transparent, and impactful.
                  </p>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed mb-4">
                    With experience in statutory audit at Singhvi Dev & Unni LLP and leadership in student-led 
                    organizations, she works at the intersection of finance, execution, and purpose. Certified 
                    in financial planning, data analysis, Bloomberg fixed income, and Python for finance.
                  </p>
                  
                  <p className="text-white/90 dark:text-muted-foreground leading-relaxed">
                    At DebtBow, she leads platform operations, auditing and investor readiness, combining sharp 
                    financial insight with hands-on leadership to push the company towards lasting impact.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section - Cream Background */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-background dark:to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-muted-foreground">
              The principles that guide our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-foreground">Impact First</h3>
              <p className="text-slate-600 dark:text-muted-foreground">
                Every transaction should create meaningful social value while generating financial returns.
              </p>
            </div>
            
            <div className="text-center bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow animation-delay-200">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-foreground">Financial Innovation</h3>
              <p className="text-slate-600 dark:text-muted-foreground">
                Pioneering new asset classes that align profit with purpose in healthcare finance.
              </p>
            </div>
            
            <div className="text-center bg-white/50 dark:bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-600">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow animation-delay-400">
                <Users className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-foreground">Transparency</h3>
              <p className="text-slate-600 dark:text-muted-foreground">
                Building trust through complete visibility in all our processes and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
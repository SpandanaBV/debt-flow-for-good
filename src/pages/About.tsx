import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, TrendingUp, Users, Award, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Mission Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
              About DebtBow
            </h1>
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're building the first liquid, impact-first market for medical debt — because freedom from debt 
                shouldn't be a luxury, and forgiving it shouldn't just be charity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-muted-foreground">
              Visionaries at the intersection of healthcare and finance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Eshanika */}
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-gold transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-dark">ES</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Eshanika Sreekanth Urs</h3>
                  <p className="text-gold font-semibold mb-4">Co-Founder, Strategy & Product</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-trading text-trading">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Brown University
                    </Badge>
                    <Badge variant="outline" className="border-forgiveness text-forgiveness">
                      <Award className="w-3 h-3 mr-1" />
                      Biomedical Design
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Business Economics
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Senior at Brown University studying Biomedical Design Engineering and Business Economics, 
                    with a thesis on Medicare privatization. DebtBow is her brainchild, a bold push to make 
                    medical debt forgivable, tradable, and profitable.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A former M&A intern at PwC, EY Consulting summer associate, and EMT ER–trained, she operates 
                    at the intersection of healthcare and finance. In leadership roles, she has led cross-functional 
                    teams and 150+ member initiatives, aligning people, systems, and outcomes.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Eshanika brings a founder's instinct, a policymaker's lens, and an operator's discipline – 
                    driving strategy, partnerships, and product design at DebtBow.
                  </p>
                </div>
              </div>
            </Card>

            {/* Shreya */}
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-gold transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-trading rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">SK</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Shreya Dilip Kini</h3>
                  <p className="text-gold font-semibold mb-4">Co-Founder, Strategy & Product</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-trading text-trading">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Babson College
                    </Badge>
                    <Badge variant="outline" className="border-forgiveness text-forgiveness">
                      <Award className="w-3 h-3 mr-1" />
                      MS Finance
                    </Badge>
                    <Badge variant="outline" className="border-gold text-gold">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Financial Planning
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Graduate in International Accounting and Finance, currently pursuing her Master of Science 
                    in Finance at Babson College. DebtBow is her vision, an ambitious move to make medical debt 
                    investable, transparent, and impactful.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With experience in statutory audit at Singhvi Dev & Unni LLP and leadership in student-led 
                    organizations, she works at the intersection of finance, execution, and purpose. Certified 
                    in financial planning, data analysis, Bloomberg fixed income, and Python for finance.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    At DebtBow, she leads platform operations, auditing and investor readiness, combining sharp 
                    financial insight with hands-on leadership to push the company towards lasting impact.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-forgiveness rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Impact First</h3>
              <p className="text-muted-foreground">
                Every transaction should create meaningful social value while generating financial returns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Financial Innovation</h3>
              <p className="text-muted-foreground">
                Pioneering new asset classes that align profit with purpose in healthcare finance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground">
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
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Users, Calendar, Shield, CheckCircle } from 'lucide-react';

const StartImpact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    profession: '',
    userType: '',
    interest: [] as string[],
    terms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Here you would integrate with Google Sheets API
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Welcome to DebtBow!",
        description: "You've successfully joined our waitlist. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        location: '',
        profession: '',
        userType: '',
        interest: [],
        terms: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInterestChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interest: [...prev.interest, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interest: prev.interest.filter(item => item !== value)
      }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Be the First to Trade Impact
          </h1>
          <p className="text-xl md:text-2xl text-gold-bright mb-4 font-medium">
            Join the Movement. Own the Change.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DebtBow is launching soon. Join the waitlist to get early access and redefine what your money can do.
          </p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (City, Country) *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., New York, USA"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Input
                    id="profession"
                    type="text"
                    value={formData.profession}
                    onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Are you joining as... *</Label>
                  <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="donor">Donor</SelectItem>
                      <SelectItem value="healthcare">Healthcare Professional</SelectItem>
                      <SelectItem value="policy">Policy Advocate</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>What excites you most? (Optional)</Label>
                  <div className="space-y-3">
                    {[
                      { value: 'forgive', label: 'Forgive debt and create social impact' },
                      { value: 'trade', label: 'Trade debt as a financial asset' },
                      { value: 'resell', label: 'Resell for profit while staying mission-driven' }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.value}
                          checked={formData.interest.includes(option.value)}
                          onCheckedChange={(checked) => handleInterestChange(option.value, checked as boolean)}
                        />
                        <Label htmlFor={option.value} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-gold text-primary-dark hover:opacity-90 font-semibold py-6 text-lg"
                >
                  Join the Waitlist
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Reinforcement Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">Launching Fall 2025</h3>
                <p className="text-muted-foreground">
                  Be among the first to access our revolutionary platform
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-trading mb-4" />
                <h3 className="text-xl font-semibold mb-2">500+ Users Signed Up</h3>
                <p className="text-muted-foreground">
                  Join a growing community of impact-driven individuals
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-forgiveness mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your Data is Safe</h3>
                <p className="text-muted-foreground">
                  No spam, ever. We respect your privacy completely
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartImpact;
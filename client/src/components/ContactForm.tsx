import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! Your message has been sent successfully. We will contact you soon!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-8 h-full">
      <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@smith.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-2"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 min-h-[150px]"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-secondary hover:opacity-90 transition-smooth text-lg py-6"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              SUBMIT
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

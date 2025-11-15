import { Phone, Mail, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LOGO } from '@/const';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/' },
    { label: 'AREAS WE SERVE', href: '/' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={APP_LOGO} 
              alt="ExecuCare Carpet Cleaning Service" 
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm">
              Professional carpet cleaning services serving the Dallas-Fort Worth area with excellence and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-smooth text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:9726817751" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-smooth text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(972) 681-7751</span>
              </a>
              <a 
                href="mailto:execucarecompany@yahoo.com" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-smooth text-sm break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>execucarecompany@yahoo.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Garland, TX</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <p className="text-white/80 text-sm mb-4">
              Ready to experience professional carpet cleaning? Contact us today!
            </p>
            <Button
              asChild
              variant="secondary"
              className="w-full bg-gradient-secondary hover:opacity-90 transition-smooth"
            >
              <a href="https://www.google.com/search?q=execucare+carpet+cleaning" target="_blank" rel="noopener noreferrer">
                <Star className="h-4 w-4 mr-2" />
                LEAVE US A REVIEW!
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} EXECU-CARE CARPET CLEANING SERVICE. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="text-white/70 hover:text-white transition-smooth text-sm">
                Privacy Policy
              </a>
              <span className="text-white/40">|</span>
              <a href="#contact" className="text-white/70 hover:text-white transition-smooth text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

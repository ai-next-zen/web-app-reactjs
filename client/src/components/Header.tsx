import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_LOGO } from '@/const';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Services', href: '/' },
    { label: 'Areas We Serve', href: '/' },
    { label: 'Gallery', href: '/' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {bannerVisible && (
        <div className="bg-gradient-secondary text-white py-3 px-4 relative">
          <div className="container flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Info className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm md:text-base font-medium">
                Sofa, loveseat & chair upholstery cleaning at $149.99. Also, 3 full rooms & hallway for $99!!
              </p>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="text-white hover:text-white/80 transition-smooth flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Top Contact Bar */}
      <div className="bg-white border-b border-border py-2 hidden md:block">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:9726817751" className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
                <Phone className="h-4 w-4" />
                <span>(972) 681-7751</span>
              </a>
              <a href="mailto:execucarecompany@yahoo.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
                <Mail className="h-4 w-4" />
                <span>execucarecompany@yahoo.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Garland, TX</span>
              </div>
            </div>
            <span className="text-muted-foreground">Reach Out to Us!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src={APP_LOGO} 
                alt="ExecuCare Carpet Cleaning Service" 
                className="h-20 md:h-24 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Call Now Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                asChild
                className="bg-gradient-secondary hover:opacity-90 transition-smooth"
              >
                <a href="tel:9726817751">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now!
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary font-medium transition-smooth py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  asChild
                  className="bg-gradient-secondary hover:opacity-90 transition-smooth w-full mt-2"
                >
                  <a href="tel:9726817751">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now!
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

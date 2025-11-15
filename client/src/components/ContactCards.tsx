import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: 'Call Now',
      content: '(972) 681-7751',
      href: 'tel:9726817751',
      bgColor: 'bg-gradient-primary',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Garland, TX',
      href: '#map',
      bgColor: 'bg-gradient-secondary',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'execucarecompany@yahoo.com',
      href: 'mailto:execucarecompany@yahoo.com',
      bgColor: 'bg-gradient-primary',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon – Sun: 24 Hours',
      href: null,
      bgColor: 'bg-gradient-secondary',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const CardContent = (
              <Card className={`${card.bgColor} text-white border-0 p-8 h-full transition-smooth hover:scale-105 hover:shadow-xl`}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/90 text-sm md:text-base break-words">
                      {card.content}
                    </p>
                  </div>
                </div>
              </Card>
            );

            return card.href ? (
              <a
                key={index}
                href={card.href}
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

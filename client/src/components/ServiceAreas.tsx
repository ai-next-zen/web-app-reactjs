import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const cities = [
    'Addison, TX',
    'Murphy, TX',
    'Dallas, TX',
    'Plano, TX',
    'Farmers Branch, TX',
    'Richardson, TX',
    'Forney, TX',
    'Rockwall, TX',
    'Garland, TX',
    'Rowlett, TX',
    'Sunnyvale, TX',
    'Royce City, TX',
    'Irving, TX',
    'Segoville, TX',
    'Mesquite, TX',
    'Wylie, TX',
  ];

  return (
    <div className="bg-card rounded-lg shadow-lg p-8 h-full">
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-primary" />
        Areas We Serve
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cities.map((city, index) => (
          <a
            key={index}
            href="#map"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth py-2 px-3 rounded-md hover:bg-muted group"
          >
            <MapPin className="h-4 w-4 text-secondary group-hover:text-primary transition-smooth flex-shrink-0" />
            <span className="text-sm md:text-base">{city}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <a
          href="tel:9726817751"
          className="inline-flex items-center justify-center w-full bg-gradient-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-smooth"
        >
          <MapPin className="h-5 w-5 mr-2" />
          CALL NOW
        </a>
      </div>
    </div>
  );
}

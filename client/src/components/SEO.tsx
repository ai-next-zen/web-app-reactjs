import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.execucaretx.com/#localbusiness",
      "name": "EXECU-CARE Carpet Cleaning Service",
      "image": "https://www.execucaretx.com/logo-new.png",
      "logo": "https://www.execucaretx.com/logo-new.png",
      "url": "https://www.execucaretx.com/",
      "telephone": "+19726817751",
      "email": "execucarecompany@yahoo.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Garland",
        "addressRegion": "TX",
        "postalCode": "75040",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.9126,
        "longitude": -96.6389
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.execucaretx.com/"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Garland",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Dallas",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Fort Worth",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Plano",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Irving",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Richardson",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Mesquite",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Rowlett",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        },
        {
          "@type": "City",
          "name": "Rockwall",
          "containedIn": {
            "@type": "State",
            "name": "Texas"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carpet Cleaning",
              "description": "Professional residential and commercial carpet cleaning services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Upholstery Cleaning",
              "description": "Professional furniture and upholstery cleaning services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Floor Cleaning",
              "description": "Professional floor cleaning and polishing services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Janitorial Services",
              "description": "Comprehensive janitorial and maintenance services"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EXECU-CARE Carpet Cleaning Service",
      "url": "https://www.execucaretx.com/",
      "logo": "https://www.execucaretx.com/logo-new.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+19726817751",
        "contactType": "customer service",
        "email": "execucarecompany@yahoo.com",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Garland",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.execucaretx.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.execucaretx.com/#contact"
        }
      ]
    };

    // Insert schemas into head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script3);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
}

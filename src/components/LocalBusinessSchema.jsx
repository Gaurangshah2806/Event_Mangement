import { useEffect } from 'react';
import {
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  EMAIL_ADDRESS,
} from '../config/contact';

export default function LocalBusinessSchema() {
  useEffect(() => {
    const tel = PHONE_DISPLAY.replace(/\s+/g, '');
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'EventPlanner',
      name: 'Shah Events Vadodara',
      description:
        'Premium wedding planner and event decorators in Vadodara — weddings, Garba, corporate events, birthdays, and custom stage decoration.',
      url: typeof window !== 'undefined' ? window.location.origin : '',
      telephone: tel,
      email: EMAIL_ADDRESS,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-303 Shivay Sky, near Shree Siddheswar Heritage, Madhavpura',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '390019',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.3148,
        longitude: 73.1679,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.google],
      priceRange: '₹₹₹',
      areaServed: {
        '@type': 'City',
        name: 'Vadodara',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'local-business-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}

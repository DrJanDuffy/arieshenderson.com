import StructuredData from './StructuredData'

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.arieshenderson.com/#organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties - New Construction Homes Division',
    alternateName: 'Dr. Jan Duffy - Exclusive Buyer Agent',
    url: 'https://www.arieshenderson.com',
    logo: 'https://www.arieshenderson.com/images/logo/logo.svg',
    description:
      "Exclusive buyer representation for new construction homes in Las Vegas. Get expert guidance from Dr. Jan Duffy, a specialized buyer's agent who puts your interests first.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Real Estate Agent',
      areaServed: ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
      availableLanguage: 'English',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    agent: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      identifier: 'S.0197614',
      jobTitle: 'Exclusive Buyer Agent',
      specializesIn: [
        'New Construction Homes',
        'Buyer Representation',
        'First-Time Homebuyers',
        'Las Vegas Real Estate',
      ],
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
      },
      {
        '@type': 'City',
        name: 'Henderson',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
      },
    ],
    serviceType: [
      'Exclusive Buyer Representation',
      'New Construction Home Buying',
      'Home Valuation',
      'Property Search',
      'Real Estate Consultation',
    ],
  }

  return <StructuredData data={organizationSchema} />
}

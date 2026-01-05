// Type declarations for RealScout web components

declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id': string
      'sort-order'?: 'NEWEST' | 'OLDEST' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH'
      'listing-status'?: 'For Sale' | 'Sold' | 'Pending'
      'property-types'?: string
      'price-min'?: string
      'price-max'?: string
    }
    'realscout-advanced-search': {
      'agent-encoded-id': string
    }
  }
}

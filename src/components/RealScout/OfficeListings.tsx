'use client'

import { useEffect } from 'react'

type OfficeListingsProps = {
  agentEncodedId: string
  sortOrder?: 'NEWEST' | 'OLDEST' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH'
  listingStatus?: 'For Sale' | 'Sold' | 'Pending'
  propertyTypes?: string
  priceMin?: number
  priceMax?: number
}

export default function OfficeListings({
  agentEncodedId,
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR',
  priceMin,
  priceMax,
}: OfficeListingsProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{
        __html: `
          realscout-office-listings {
            --rs-listing-divider-color: #0e64c8;
            width: 100%;
          }
        `
      }} />
      <realscout-office-listings
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin?.toString()}
        price-max={priceMax?.toString()}
      />
    </div>
  )
}

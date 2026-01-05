'use client'

import { useEffect, createElement } from 'react'

type AdvancedSearchProps = {
  agentEncodedId: string
}

export default function AdvancedSearch({
  agentEncodedId,
}: AdvancedSearchProps) {
  useEffect(() => {
    // Load RealScout script if not already loaded
    if (
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="realscout-web-components"]')
    ) {
      const script = document.createElement('script')
      script.src =
        'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: #4a90e2;
            --rs-as-widget-width: 500px !important;
          }
        `,
        }}
      />
      {createElement('realscout-advanced-search', {
        'agent-encoded-id': agentEncodedId,
      })}
    </div>
  )
}

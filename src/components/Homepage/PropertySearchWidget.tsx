import SectionTitle from '../Common/SectionTitle'
import OfficeListings from '../RealScout/OfficeListings'

export default function PropertySearchWidget() {
  return (
    <section
      id="property-search"
      className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Search Available Properties"
          paragraph="Browse our current listings of homes for sale. Filter by price, location, and property type to find your perfect home."
          center
        />

        <div className="mx-auto max-w-6xl">
          <OfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin={400000}
            priceMax={700000}
          />
        </div>
      </div>
    </section>
  )
}

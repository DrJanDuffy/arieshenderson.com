import SectionTitle from '../Common/SectionTitle'
import OfficeListings from '../RealScout/OfficeListings'
import AdvancedSearch from '../RealScout/AdvancedSearch'

export default function PropertySearchWidget() {
  return (
    <section
      id="property-search"
      className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Search Available Properties"
          paragraph="Use our advanced search to find your perfect home. Filter by price, location, property type, and more."
          center
        />

        <div className="mx-auto mb-12 max-w-2xl">
          <AdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
        </div>

        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
            Current Listings
          </h3>
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

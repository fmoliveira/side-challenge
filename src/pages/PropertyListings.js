import { usePropertyListings } from '../api/simplyRetsApi';

import Header from '../components/Header';
import PropertyGrid from '../components/PropertyGrid';
import PropertyCard from '../components/PropertyCard';

export default function PropertyListings() {
  const { isLoading, data, error } = usePropertyListings();

  return (
    <div>
      <Header>Property Listings</Header>
      <PropertyGrid>
        {data.map((property) => (
          <PropertyCard key={property.mlsId} {...property} />
        ))}
      </PropertyGrid>
    </div>
  );
}

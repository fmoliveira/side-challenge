import { usePropertyListings } from '../api/simplyRetsApi';

import Header from '../components/Header';
import Container from '../components/Container';
import BlankState from '../components/BlankState';
import PropertyGrid from '../components/PropertyGrid';
import PropertyCard from '../components/PropertyCard';

export default function PropertyListings() {
  const { isLoading, data, error } = usePropertyListings();

  return (
    <div>
      <Header>Property Listings</Header>
      <Container>
        <BlankState isLoading={isLoading} error={error} />
        <PropertyGrid>
          {data.map((property) => (
            <PropertyCard key={property.mlsId} {...property} />
          ))}
        </PropertyGrid>
      </Container>
    </div>
  );
}

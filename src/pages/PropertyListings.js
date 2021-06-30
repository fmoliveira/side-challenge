import { usePropertyListings } from '../api/simplyRetsApi';
import { useFavorites } from '../api/localState';

import Header from '../components/Header';
import Container from '../components/Container';
import BlankState from '../components/BlankState';
import PropertyGrid from '../components/PropertyGrid';
import PropertyCard from '../components/PropertyCard';

export default function PropertyListings() {
  const { isLoading, data, error } = usePropertyListings();
  const [favorites, setFavorite] = useFavorites();

  return (
    <div>
      <Header>Property Listings</Header>
      <Container>
        <BlankState isLoading={isLoading} error={error} />
        <PropertyGrid>
          {data.map((property) => (
            <PropertyCard
              key={property.mlsId}
              {...property}
              isFavorite={favorites[property.mlsId]}
              onChangeFavorite={(isFavorite) =>
                setFavorite(property.mlsId, isFavorite)
              }
            />
          ))}
        </PropertyGrid>
      </Container>
    </div>
  );
}

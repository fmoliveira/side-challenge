import { usePropertyListings } from '../api/simplyRetsApi';

import Header from '../components/Header';

export default function PropertyListings() {
  const { isLoading, data, error } = usePropertyListings();

  return (
    <div>
      <Header>Property Listings</Header>
      <p>Listing {data.length} properties</p>
    </div>
  );
}

import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.simplyrets.com';
const LOGIN = process.env.REACT_APP_SIMPLYRETS_LOGIN;
const PASSWORD = process.env.REACT_APP_SIMPLYRETS_PASSWORD;

const LISTINGS_CACHE_KEY = 'cache:listings';

// try to get cached listings from local storage
const getCachedListings = () => {
  try {
    const cachedItem = localStorage.getItem(LISTINGS_CACHE_KEY);
    if (cachedItem) {
      const deserializedData = JSON.parse(cachedItem);
      if (Array.isArray(deserializedData)) {
        return deserializedData;
      }
    }
  } catch (error) {
    // fail silently because caching is not critical
  }
  return undefined;
};

// keep listings in local storage
const setCachedListings = (data) => {
  try {
    localStorage.setItem(LISTINGS_CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    // fail silently because caching is not critical
  }
};

// prepare common authorization headers for reuse
const BASIC_CREDENTIALS = btoa(`${LOGIN}:${PASSWORD}`);
const Authorization = `Basic ${BASIC_CREDENTIALS}`;
const headers = new Headers({ Authorization });

/**
 * Get property listings.
 *
 * @returns { isLoading, data, error }  Object with request status and returned data
 */
export function usePropertyListings() {
  const [data, setData] = useState(() => getCachedListings() ?? []);
  const [status, setStatus] = useState('pending');

  // normalize properties data by picking only what we need
  const normalizeProperties = (data) =>
    data.map(({ mlsId, property, listPrice, listDate, address, photos }) => ({
      mlsId,
      area: property.area,
      bedrooms: property.bedrooms,
      baths: property.bathsFull + property.bathsHalf * 0.5,
      address,
      listPrice,
      listDate,
      picture: photos?.[0],
    }));

  // fetch listings from cache-first and then the api
  const fetchPropertyListings = async () => {
    // try to get from the local storage cache
    try {
      const data = getCachedListings();
      if (data) {
        setStatus('success');
        setData(data);
        return;
      }
    } catch (error) {
      // fail silently and proceed to fetching from the api
    }

    // try to fetch from the api
    try {
      const data = await fetch(`${BASE_URL}/properties`, { headers })
        .then((res) => res.json())
        .then(normalizeProperties);
      setData(data);
      setStatus('success');
      setCachedListings(data);
    } catch (error) {
      setStatus('error');
    }
  };

  // fetch listings when initializing hook
  useEffect(() => fetchPropertyListings(), []);

  const isLoading = status === 'loading';
  const error = status === 'error';

  return { isLoading, data, error };
}

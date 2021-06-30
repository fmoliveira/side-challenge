import { useState } from 'react';

const FAVORITE_STORAGE_KEY = 'favorite:listings';

// try to get cached listings from local storage
const getFavorites = () => {
  try {
    const cachedItem = localStorage.getItem(FAVORITE_STORAGE_KEY);
    if (cachedItem) {
      const deserializedData = JSON.parse(cachedItem);
      return deserializedData;
    }
  } catch (error) {
    // fail silently because we don't have other persistence strategy for now
  }
  return undefined;
};

// keep listings in local storage
const storeFavorites = (data) => {
  try {
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // fail silently because we don't have other persistence strategy for now
  }
};

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => getFavorites() ?? {});

  const setPropertyFavorite = (mlsId, isFavorite) => {
    const newFavorites = { ...favorites };

    if (isFavorite) {
      newFavorites[mlsId] = isFavorite;
    } else {
      delete newFavorites[mlsId];
    }

    setFavorites(newFavorites);
    storeFavorites(newFavorites);
  };

  return [favorites, setPropertyFavorite];
}

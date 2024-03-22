export const separateFavorites = (data) => {
  const favorites = [];
  const nonFavorites = [];

  data.forEach((item) => {
    if (item.favorite) {
      favorites.push(item);
    } else {
      nonFavorites.push(item);
    }
  });

  return {
    favorites,
    nonFavorites,
  };
};

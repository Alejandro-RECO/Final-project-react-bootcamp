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

export const updateContacts = (state, payload) => {
  const idData = payload.map((element) => element.id);
  const id = idData[0];

  const { favorites, nonFavorites } = separateFavorites(payload);

  const updatedContactsFavorites = state.contactsFavorites.filter((contact) => contact.id !== id);
  const updatedContacts = state.contacts.filter((contact) => contact.id !== id);

  favorites.forEach((favorite) => {
    if (!state.contactsFavorites.some((contact) => contact.id === favorite.id)) {
      updatedContactsFavorites.push(favorite);
    }
  });

  nonFavorites.forEach((nonFavorite) => {
    if (!state.contacts.some((contact) => contact.id === nonFavorite.id)) {
      updatedContacts.push(nonFavorite);
    }
  });

  return {
    contactsFavorites: updatedContactsFavorites,
    contacts: updatedContacts,
  };
}
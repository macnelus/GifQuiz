const BASE_URL =
  'https://api.giphy.com/v1/gifs/search?api_key=xU4UEy7Birks8tEkL7IN0KLvtbS9AxGs';

const PARAMS = '&limit=1&offset=0&rating=g&lang=es';

export const getGiph = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}&q=${query}${PARAMS}`);

    if (response.ok) {
      const { data } = await response.json();
      const giph = data[0].images.original.url;
      return giph;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

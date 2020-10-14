
const url = 'https://api.giphy.com/v1/gifs/search?api_key=xU4UEy7Birks8tEkL7IN0KLvtbS9AxGs&q=casa&limit=1&offset=0&rating=g&lang=es';

 const getGiphyData = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
 };
export default getGiphyData;
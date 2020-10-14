
const url = '';

 const getGiphyData = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
 };
export default getGiphyData;
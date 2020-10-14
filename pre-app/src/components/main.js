import React, { useEffect, useState } from 'react';
import getGiphyData from './data.js';
import GiphyItem from './item.js';

const ListCountries = () => {
  const [countries, setCountries] = useState([]);

  const fetchGiphyItem = async () => {
    const giphyData = await getGiphyData();
    setGiphy(giphyData);
  };

  useEffect(() => {
    fetchGiphyItem();
  });

  return (
    <>
      <GiphyItem giphyData={giphy} />
    </>
  );
};
export default ListCountries;

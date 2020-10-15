import React, { useEffect, useState } from 'react';
import { getGiph } from '../lib/api';

const GiphyPage = () => {
  // const saying = ['casa', 'herrero', 'cuchillo'];
  const saying = ['mal', 'tiempo', 'cara'];

  const [words, setWords] = useState({
    'word-1': '',
    'word-2': '',
    'word-3': '',
  });

  const [giphys, setGiphys] = useState([]);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setWords({ ...words, [name]: value });
    console.log({ words });
  };

  const fetchAllGiphs = async () => {
    const giphUrls = await Promise.all(
      saying.map(async (sayingWord) => await getGiph(sayingWord)),
    );
    setGiphys(giphUrls);
  };

  useEffect(() => {
    fetchAllGiphs();
  }, []);

  return (
    <main>
      <h2>Giph page</h2>

      <article>
        <form>
          <div>
            <picture>
              <img src={giphys['word-1']} alt="" />
            </picture>
            <label htmlFor="word-1">Palabra</label>
            <input
              id="word-1"
              type="text"
              placeholder="palabra"
              name="word-1"
              onChange={handleChange}
              value={words['word-1']}
            />
          </div>
          <div>
            <picture>
              <img src={giphys['word-2']} alt="" />
            </picture>
            <label htmlFor="word-2">Palabra</label>
            <input
              id="word-2"
              type="text"
              placeholder="palabra"
              name="word-2"
              onChange={handleChange}
              value={words['word-2']}
            />
          </div>
          <div>
            <picture>
              <img src={giphys['word-3']} alt="" />
            </picture>
            <label htmlFor="word-3">Palabra</label>
            <input
              id="word-3"
              type="text"
              placeholder="palabra"
              name="word-3"
              onChange={handleChange}
              value={words['word-3']}
            />
          </div>
        </form>
      </article>
    </main>
  );
};

export default GiphyPage;

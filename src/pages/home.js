import React, { useState } from 'react';
import { getGiph } from '../lib/api';

const Home = () => {
  const [words, setWords] = useState({
    'word-1': '',
    'word-2': '',
    'word-3': '',
  });

  const [giphys, setGiphys] = useState({
    'word-1': '',
    'word-2': '',
    'word-3': '',
  });

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setWords({ ...words, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wordNumber = event.currentTarget.dataset.word;
    const wordToSearch = words[wordNumber];

    try {
      const giph = await getGiph(wordToSearch);
      setGiphys({ ...giphys, [wordNumber]: giph });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="page">
      <h1>Home</h1>

      <article>
        <picture>
          <img src={giphys['word-1']} alt="" />
        </picture>
        <form onSubmit={handleSubmit} data-word="word-1">
          <label htmlFor="word-1">giphy</label>
          <input
            type="search"
            name="word-1"
            id="word-1"
            value={words['word-1']}
            onChange={handleChange}
          />
        </form>
      </article>
    </main>
  );
};

export default Home;

import React, { useState } from 'react';
import { getGiph } from '../lib/api';

import Giph from '../components/giph';

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

      <Giph
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        giphys={giphys}
        words={words}
        word={'word-1'}
      />
      <Giph
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        giphys={giphys}
        words={words}
        word={'word-2'}
      />
      <Giph
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        giphys={giphys}
        words={words}
        word={'word-3'}
      />
    </main>
  );
};

export default Home;

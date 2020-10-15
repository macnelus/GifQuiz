import React from 'react';
import Saying from '../components/saying';

const GiphyPage = () => {
  const saying = ['lol', 'tiempo', 'cara'];

  return (
    <main>
      <h2>Giph page</h2>
      <Saying saying={saying} />
    </main>
  );
};

export default GiphyPage;

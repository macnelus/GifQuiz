import React from 'react';
import Saying from '../components/saying';

const sayings = [
  {
    keyword: ['mal', 'tiempo', 'cara'],
    middleWords: ['a', '', 'buena', ''],
  },
  {
    keyword: ['casa', 'herrero', 'palo'],
    middleWords: ['en', 'del', 'cuchillo de', ''],
  },
];

const randomNumberForSayings = () => Math.floor(Math.random() * sayings.length);
const { keyword, middleWords } = sayings[randomNumberForSayings()];

const GiphyPage = () => {
  return (
    <main>
      <h2>Giph page</h2>
      <Saying saying={keyword} middleWords={middleWords} />
    </main>
  );
};

export default GiphyPage;

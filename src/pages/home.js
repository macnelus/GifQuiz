import React from 'react';
import Saying from '../components/saying';

const sayings = [
  ['mal', 'tiempo', 'cara'],
  ['casa', 'herrero', 'palo'],
  ['pajaro', 'mano', 'volando'],
];

const randomNumberForSayings = () => Math.floor(Math.random() * sayings.length);

const getRandomSaying = () => sayings[randomNumberForSayings()];

const GiphyPage = () => {
  return (
    <main>
      <h2>Giph page</h2>
      <Saying saying={getRandomSaying()} />
    </main>
  );
};

export default GiphyPage;

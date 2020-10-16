import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
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
    <div className="container">
      <Header />
      <main>
        <Saying saying={keyword} middleWords={middleWords} />

        <section className="">
          <div className="owner">
            <img src="./imgs/sign.png" alt="giphy" />
          </div>
          <div>
            <h3>¿Quien lo ha dicho?</h3>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default GiphyPage;

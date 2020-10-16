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
 /*   <main>
        <section class="left">
          <form action="/" method= "POST">
            <div class="phrase">
              <div class="words">
                <label for="">En</label>
              </div>
                <div class="giphy">
                  <img src="https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif" alt="">
                  <input type="text" id="input1">
              </div>
                            <div class="words">
                <label for="">de</label>
              </div>
              <div class="giphy">
                  <img src="https://media.giphy.com/media/xTiTnkxnCpPkQmTp84/giphy.gif" alt="">
                  <input type="text" id="input1">
              </div>
                            <div class="words">
                <label for="">,</label>
              </div>
              <div class="giphy">
                  <img src="https://media.giphy.com/media/LoU1J08SI9FMNhAxR4/giphy.gif" alt="">
                  <input type="text" id="input1">
              </div>
              <div class="words">
                <label for="">de palo</label>
              </div>
            </div>
        </form>
      </section>
      <section class="right">
        <div class="owner"><img src="./imgs/sign.png" alt="giphy"></div>
        <div>
          <h3>¿Quien lo ha dicho?</h3>
        </div>
      </section>
    </main>*/
 ///////////////////
    <div className="container">
      <Header />
      <main className="main">
        
      <Saying saying={keyword} middleWords={middleWords} />
      
      <section className="right">
        <div className="owner"><img src="./imgs/sign.png" alt="giphy" /></div>
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

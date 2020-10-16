import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Saying from '../components/saying';
import sign from '../images/sign.png';

const sayings = [
  {
    keyword: ['cambio', 'quieres', 'mundo'],
    middleWords: ['Sé el', 'que', 'ver en el', ''],
  },
  {
    keyword: ['victoria', 'gana', 'uno'],
    middleWords: ['La máxima', 'es la que se', 'sobre', 'mismo'],
  },
  {
    keyword: ['no', 'medicina', 'felicidad'],
    middleWords: ['', 'hay', 'que cure lo que cura la', ''],
  },
  {
    keyword: ['pies', 'alas', 'volar'],
    middleWords: ['', 'para que los quiero si tengo', 'para', ''],
  },
];

const randomNumberForSayings = () => Math.floor(Math.random() * sayings.length);
const { keyword, middleWords } = sayings[randomNumberForSayings()];

const handleReload = (event) => {
    event.preventDefault();
    window.location.reload();
};

const GiphyPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Saying saying={keyword} middleWords={middleWords} />

        <section className="wrapper-author">
          <div className="owner">
            <img src={sign} alt="giphy" className="author" />
          </div>
          <div>
            <h3>¿Quien lo ha dicho?</h3>
          </div>
          <button type="submit" className="reload" onClick={handleReload}>
            Volver a jugar
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default GiphyPage;

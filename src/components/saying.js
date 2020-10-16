import React, { useEffect, useState } from 'react';
import { getGiph } from '../lib/api';
import GiphForm from '../components/giphy-form';
import sign from '../images/sign.png';
import cup from '../images/cup.png';

const Saying = ({ saying, middleWords }) => {
  const [words, setWords] = useState({
    'word-1': '',
    'word-2': '',
    'word-3': '',
  });

  const [winner, setWinner] = useState(false);
  const [giphys, setGiphys] = useState([]);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setWords({ ...words, [name]: value });
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hola');
    const areWordsTheSameAsSaying = saying.every((sayingWord, i) => {
      return sayingWord.toLowerCase() === words[`word-${i + 1}`].toLowerCase();
    });
    setWinner(areWordsTheSameAsSaying);
  };

  const showResult = () => {
    let resultToRender;

    if (winner) {
      resultToRender = <img src={cup} alt="giphy" className="author" />;
    } else {
      resultToRender = <img src={sign} alt="giphy" className="author" />;
    }
    return resultToRender;
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <div className="giphys-container">
          {giphys.map((giph, i) => {
            return (
              <div key={i} className="giph-container">
                <div className="words">
                  <p>{middleWords[i]}</p>
                </div>
                <GiphForm
                  handleChange={handleChange}
                  giph={giph}
                  words={words}
                  word={`word-${i + 1}`}
                  key={giph}
                />
              </div>
            );
          })}
          <p>{middleWords[middleWords.length - 1]}</p>
        </div>
        <div className="giphy-submit-container">
          <button type="submit">Averiguar</button>
        </div>
      </form>
      <section className="wrapper-author">
        <div className="owner">{showResult()}</div>
      </section>
    </section>
  );
};

export default Saying;

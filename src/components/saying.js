import React, { useEffect, useState } from 'react';
import { getGiph } from '../lib/api';
import GiphForm from '../components/giphy-form';

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
 
    </section>
  );
};

export default Saying;

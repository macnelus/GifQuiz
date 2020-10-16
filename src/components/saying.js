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
    const areWordsTheSameAsSaying = saying.every((sayingWord, i) => {
      return sayingWord.toLowerCase() === words[`word-${i + 1}`].toLowerCase();
    });
    setWinner(areWordsTheSameAsSaying);
  };

  return (
    <main>
      <section className="left">
        <form onSubmit={handleSubmit}>
          {giphys.map((giph, i) => {
            return (
              <div key={i}>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Saying;

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
    /*<form action="/" method= "POST">
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
        </form> */
    <>
    
      <form onSubmit={handleSubmit} className="left-form">
        {giphys.map((giph, i) => {
          return (
            <>
              <p>{middleWords[i]}</p>
              <GiphForm
                handleChange={handleChange}
                giph={giph}
                words={words}
                word={`word-${i + 1}`}
                key={giph}
              />
            </>
          );
        })}
        <p>{middleWords[middleWords.length - 1]}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Saying;

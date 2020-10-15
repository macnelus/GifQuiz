import React from 'react';

const GiphForm = ({ giph, word, words, handleChange }) => {
  return (
    <div>
      <picture>
        <img src={giphys['word-1']} alt="" />
      </picture>
      <label htmlFor="word-1">Palabra</label>
      <input
        id="word-1"
        type="text"
        placeholder="palabra"
        name="word-1"
        onChange={handleChange}
        value={words['word-1']}
      />
    </div>
  );
};

export default GiphForm;

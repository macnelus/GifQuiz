import React from 'react';

const GiphForm = ({ giph, word, words, handleChange }) => {
  return (
    <div>
      <picture>
        <img src={giph} alt="" />
      </picture>
      <label htmlFor={word}>Palabra</label>
      <input
        id={word}
        type="text"
        placeholder="palabra"
        name={word}
        onChange={handleChange}
        value={words[word]}
      />
    </div>
  );
};

export default GiphForm;

import React from 'react';

const GiphForm = ({ giph, word, words, handleChange }) => {
  return (
    <div className="giphy">
      <picture style={{ backgroundImage: `url(${giph})` }}></picture>
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

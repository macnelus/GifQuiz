import React from 'react';

const Giph = ({ handleSubmit, handleChange, giphys, words, word }) => {
  return (
    <article>
      <picture>
        <img src={giphys[word]} alt="" />
      </picture>
      <form onSubmit={handleSubmit} data-word={word}>
        <label htmlFor={word}>giphy</label>
        <input
          type="search"
          name={word}
          id={word}
          value={words[word]}
          onChange={handleChange}
        />
      </form>
    </article>
  );
};

export default Giph;

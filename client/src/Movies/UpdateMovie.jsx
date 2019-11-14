import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: ""
};

const UpdateMovie = () => {
  const [movieData, setMovieData] = useState(initialMovie);

  const handleChange = event => {
    event.persist();

    let value = event.target.value;

    if (event.target.name === "metascore") {
      value = parseInt(value, 10);
    }

    setMovieData({ ...movieData, [event.target.name]: value });
  };

  const updateMovieInfo = event => {
    event.preventDefault();
    console.log(movieData);
  };

  return (
    <div className="update-movie-container">
      <form onSubmit={updateMovieInfo}>
        <input
          type="text"
          name="title"
          placeholder="Movie Title..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="director"
          placeholder="Director(s)..."
          onChange={handleChange}
        />
        <input
          type="number"
          name="metascore"
          placeholder="Metascore..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="starts"
          placeholder="Stars..."
          onChange={handleChange}
        />
        <button type="submit">Update Movie Info</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

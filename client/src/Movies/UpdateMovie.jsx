import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovie = props => {
  const [movieData, setMovieData] = useState(initialMovie);

  // sets what the user enters from the form to movieData state
  const handleChange = event => {
    event.persist();

    let value = event.target.value;

    // if (event.target.name === "metascore") {
    //   value = parseInt(value, 10);
    // }

    // Allows multiple stars to be entered and then split based upon the comma
    if (event.target.name === "stars") {
      setMovieData({
        ...movieData,
        stars: event.target.value.split(",")
      });
    } else {
      setMovieData({ ...movieData, [event.target.name]: value });
    }
  };

  useEffect(() => {
    if (props.movies.length > 0) {
      const newMovie = props.movies.find(
        movie => `${movie.id}` === props.match.params.id
      );
      setMovieData(newMovie);
      console.log("NEW MOVIE: ", newMovie);
    }
  }, [props.movies, props.match.params.id]);

  /// Updates the changes so the user can edit movie title information
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
          value={movieData.title}
        />
        <input
          type="text"
          name="director"
          placeholder="Director(s)..."
          onChange={handleChange}
          value={movieData.director}
        />
        <input
          type="number"
          name="metascore"
          placeholder="Metascore..."
          onChange={handleChange}
          value={movieData.metascore}
        />
        <input
          type="text"
          name="stars"
          placeholder="Stars..."
          onChange={handleChange}
          value={movieData.stars}
        />
        <button type="submit">Update Movie Info</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

import React, { useState } from "react";
import axios from "axios";

const AddMovie = props => {
  const [addMovie, setAddMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const handleChanges = event => {
    setAddMovie({ ...addMovie, [event.target.name]: event.target.value });
    console.log(addMovie);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, addMovie)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div className="add-new-movie-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title..."
          name="title"
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="Director..."
          onChange={handleChanges}
          name="director"
        />
        <input
          type="number"
          placeholder="Metascore..."
          onChange={handleChanges}
          name="metascore"
        />
        <input
          type="text"
          placeholder="Movie Star(s).."
          onChange={handleChanges}
          name="stars"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

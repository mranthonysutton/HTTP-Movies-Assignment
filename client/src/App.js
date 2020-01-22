import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  // // this runs once
  // useEffect(() => {
  //   console.log("APP AXIOS (running...)");
  //   axios
  //     .get("http://localhost:5000/api/movies")
  //     .then(response => setMovies(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id" component={UpdateMovie} />
      <Route
        path="/add-movie"
        render={props => {
          return <AddMovie {...props} />;
        }}
      />
    </>
  );
};

export default App;

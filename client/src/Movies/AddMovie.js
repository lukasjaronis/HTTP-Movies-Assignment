import React, { useState } from "react";
import axios from "axios";

const AddNewMovie = props => {
  const [addMovie, setAddMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const id = props.match.params.id;

  const handleChange = e => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
      id: id
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies/`, addMovie)
      .then(() => {
        props.history.push("/");
      }) // after movie is added, pushes you to /home

      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{addMovie.title}</h1>
      <input
        name="director"
        value={addMovie.director}
        onChange={handleChange}
      />
      <input name="title" value={addMovie.title} onChange={handleChange} />
      <input
        name="metascore"
        value={addMovie.metascore}
        onChange={handleChange}
      />
      <input
        type="text"
        name="stars"
        placeholder="stars"
        value={addMovie.stars}
        onChange={handleChange}
      />
      <button type="submit">Add new movie</button>
    </form>
  );
};

export default AddNewMovie;

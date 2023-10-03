import "./MovieListStyle.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../Component/MovieCard/MovieCard";
import MainTitle from "../../Component/MainTitle/MainTitle";

const Movies = ( props ) => {

  const [data, setData] = useState([]);

  const getData = () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${props.search}?language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmYTBhZjdjYWM2OWQxZWQwMGQzZGFjY2UxMGI4NSIsInN1YiI6IjY1MDljYWQ3MzczYWMyMDExYzQwMzU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFA-1VenS3-93BtzhXyKq3Tl48GyB6nMhCLJdNCghQ",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="movieList-container">
      
      <MainTitle titulo={`${props.title}`} />

      <div className="movieList-list">
      
        {data ? (
          data.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_url={movie.poster_path}
              movie_id={movie.id}
            />
          ))
      
        ) : (
      
            <h2>Tem nao</h2>
        )}
      </div>

    </div>
  );
};

export default Movies;

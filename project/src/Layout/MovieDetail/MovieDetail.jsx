import React, { useEffect, useState } from "react";
import "./MovieDetailStyles.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const {
    title,
    overview,
    release_date,
    production_companies,
    genres,
    original_language,
    poster_path,
    revenue,
  } = data;

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmYTBhZjdjYWM2OWQxZWQwMGQzZGFjY2UxMGI4NSIsInN1YiI6IjY1MDljYWQ3MzczYWMyMDExYzQwMzU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFA-1VenS3-93BtzhXyKq3Tl48GyB6nMhCLJdNCghQ",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="MovieDetail">
      {data ? (
        <>
          <img
            className="MovieDetail__banner"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Banner"
          />

          <div className="MovieDetail__info">
            <h1 className="MovieDetail__title">{title}</h1>

            <h1 className="MovieDetail__overview">{overview}</h1>

            <h1 className="MovieDetail__release">Realese date: {release_date}</h1>

            <ul >
            <h1 className="MovieDetails__companiesLabel">Production Companies</h1>
            {production_companies ? (
              production_companies.map((company) => (
                <li className="MovieDetails__list" key={company.name}>
                  {company.name}
                </li>
              ))
            ) : (
              <></>
            )}
            </ul>

            <ul >
            <h1 className="MovieDetails__genres">Genres</h1>
            {genres ? (
              genres.map((genre) => (
                <li className="MovieDetails__list" key={genre.id}>
                  {genre.name}
                </li>
              ))
            ) : (
              <></>
            )}
            </ul>

            {original_language ? (
              <h1 className="MovieDetail__language">
                Original Language: {original_language.toUpperCase()}
              </h1>
            ) : (
              <></>
            )}

            <h1 className="MovieDetail__revenue">Revenue: <span>{revenue}</span></h1>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieDetail;

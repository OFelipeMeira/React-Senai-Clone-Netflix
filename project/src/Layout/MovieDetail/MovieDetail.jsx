import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { title,
          adult,
          release_date,
          production_companies,
          original_language } = data;

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
        setData(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div className="MovieDetail">
      {data ? (
        <>
          <h1>{data.title}</h1>
          <h2>slaa2</h2>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieDetail;

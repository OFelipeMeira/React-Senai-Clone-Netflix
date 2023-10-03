import React from "react";

import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";

import MovieDetail from "../../Layout/MovieDetail/MovieDetail";

const MoviePage = () => {
  return (
    <div className="MoviePage">
      <Header />
      <MovieDetail />
      <Footer />
    </div>
  );
};

export default MoviePage;

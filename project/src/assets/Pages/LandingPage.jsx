import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Movies from "../Layout/PopularMovieList";
import { useEffect } from "react";


const LandingPage = () => {

    return (
        <div>
            <Header />
            <Movies />
            <Footer />
        </div >
    )
}

export default LandingPage
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Movies from "../../Layout/PopularMovieList/PopularMovieList";
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
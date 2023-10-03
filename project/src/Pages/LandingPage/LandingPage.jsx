import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import MovieList from "../../Layout/MovieList/MovieList";

const LandingPage = () => {

    return (
        <div>
            <Header />
            <MovieList title={"Most Rated Movies"} search={"top_rated"}/>
            <MovieList title={"Most Popular Movies"} search={"popular"}/>
            <MovieList title={"Upcoming Movies"} search={"upcoming"}/>
            <Footer />
        </div >
    )
}

export default LandingPage
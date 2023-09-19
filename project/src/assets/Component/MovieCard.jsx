

const MovieCard = (props) =>{

    const {title,poster_url} = props

    return(
        <div className="movieCard-container">
            <h1 className="movieCard-Name">{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_url}`} alt="sla" />
        </div>
    )
}

export default MovieCard;
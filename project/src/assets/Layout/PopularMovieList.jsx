import React, { useEffect, useState } from 'react'
import MainTitle from '../Component/MainTitle'
import axios from "axios";
import MovieCard from '../Component/MovieCard';

const Movies = () => {

    const [data, setData] = useState([])
    const [imgs, setImgs] = useState([])


    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmYTBhZjdjYWM2OWQxZWQwMGQzZGFjY2UxMGI4NSIsInN1YiI6IjY1MDljYWQ3MzczYWMyMDExYzQwMzU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFA-1VenS3-93BtzhXyKq3Tl48GyB6nMhCLJdNCghQ'
            }
        };

        axios.request(options)
            .then(function (response) {
                setData(response.data.results)
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // const getSingleImg = (movie_id) => {

    //     const options = {
    //         method: 'GET',
    //         url: `https://api.themoviedb.org/3/movie/${movie_id}/images`,
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmYTBhZjdjYWM2OWQxZWQwMGQzZGFjY2UxMGI4NSIsInN1YiI6IjY1MDljYWQ3MzczYWMyMDExYzQwMzU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFA-1VenS3-93BtzhXyKq3Tl48GyB6nMhCLJdNCghQ'
    //         }
    //     };

    //     axios.request(options)
    //         .then(function (response) {
    //             // console.log(response.data.logos)
    //             console.log('a')
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // }

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     if (data.length === 20) {
    //         getAllImgs()
    //     }
    // }, [data])

    return (
        <div className='movieList-containter'>

            {data ? (

                data.map(movie => (
                    <MovieCard key={movie.id} title={movie.title} poster_url={movie.poster_path}/>
                )) 
            ) : (
                <h2>Tem nao</h2>
            )}

        </div>
    )
}

export default Movies
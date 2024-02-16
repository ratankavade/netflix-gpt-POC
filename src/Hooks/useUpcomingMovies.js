import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../Utils/Constants/constants'
import { addUpcomingMovies } from '../Utils/Slice/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovieList = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTION);
        const json = await data.json();

        // console.log("Upcoming Movies", json.results);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        getUpcomingMovieList();
    }, [])
}

export default useUpcomingMovies

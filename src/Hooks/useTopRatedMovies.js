import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../Utils/Constants/constants'
import { addTopRatedMovies } from '../Utils/Slice/moviesSlice'

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const topRataedMovies = useSelector(store => store.movies.topRataedMovies);
    
    const getTopRatedMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTION);
        const json = await data.json();

        // console.log("Top Rated", json.results)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        !topRataedMovies && getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies

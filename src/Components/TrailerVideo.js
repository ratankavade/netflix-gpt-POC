import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/Constants/constants'

const TrailerVideo = ({id, key}) => {
    const getTrailerVideo = async() => {
        // get api with dynamic id to get video
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTION)
        const json = await data.json();

        const filterTrailer = json.results.filter(video => video.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        // console.log("filterTrailer", trailer);
    }

    useEffect(()=>{
        getTrailerVideo();
    }, [])

    return (
        <div className=''>
            <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/7u3zBVAxx_w?si="+key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default TrailerVideo

import { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Details() {
   const[movie , setMovie] =useState([]);
  const parmes=useParams()

  const getMOvie = async ()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${parmes.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
    setMovie (response.data);
      }//getMOvie

      useEffect(()=>{
        getMOvie()
         },[] )//useEffect

     

  return (
    <section className='py-5 container'>
    <div className='row'>
        <div className='col-sm-6'>
        <h1> اسم الفيلم{movie.title} </h1>
          <h3>  سنه الانتاج{movie.release_date} </h3>
          <h3> التقييم{movie.vote_average} </h3>
          <p>{movie.overview}</p>
        </div>

        <div className='col-sm-6 text-center'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-50 mx-auto' alt="" />
        </div>

    </div> {/*row*/}
  </section>
  )
}

export default Details
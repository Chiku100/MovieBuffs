import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context';
import { FaImdb } from "react-icons/fa";
import { metacr } from "react-icons/fa";
import tomato from "./rotten.jpg"
import imdb from "./imdb.png"
import meta from "./metacritic.png"
import Loading from './Loading';
export default function Movie() {
  const { value,loading,setLoading } = useGlobalContext()
  const [rating, setRating] = useState("")

  const [singleMovie, setSingleMovie] = useState([])
  const [val, setVal] = useState({
    "imdb": 0, "Metacritic": 0, "Rotten Tomatoes": 0, "imdbrating": 0
  })
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=9cbe6859&i=${id}`).then(res => res.json()).then(log => { setSingleMovie(log); setRating(log.Rated); setLoading(false);setVal({"imdbrating": log.imdbRating, "imdb": log.imdbRating, "Metacritic": log.Ratings[1].Value, "Rotten Tomatoes": log.Ratings[2].Value }) }).catch((err) => {
      return console.log(err);
    })
  }, [id])
  console.log(singleMovie);
  return (loading?<Loading />:
    <section className='single-movie'>
      <img src={singleMovie.Poster} alt="" />
      <div className="single-movie-info">
        <h2>{singleMovie.Title}</h2>
        <p>{singleMovie.Year}</p>
        <div className='ratings'>
          <div className="img__wrap">
            <b>{val.imdb}<img id='rating-logo' src={imdb} alt="imdb" /></b>
            <em className="img__description">IMDB</em>
          </div>
          <div className="img__wrap">
            <b>{val.Metacritic}<img id='rating-logo' src={tomato} alt="rt" /></b>
            <em className="img__description">Rotten Tomato</em>
          </div>
          <div className="img__wrap">
            <b>{val['Rotten Tomatoes']}<img id='rating-logo' src={meta} alt="" /></b>
            <em className="img__description">Metacritic</em>
          </div>

        </div>
        {/* <p>Released <span>{singleMovie.Released}</span></p> */}
        <em>Genre: <span>{singleMovie.Genre}</span></em>
        <p>{singleMovie.Plot}</p>
        <h3>Actors: {singleMovie.Actors}</h3>
        <h3>{singleMovie.Director}</h3>
        <p >Rated: <span className={rating.toLowerCase() == 'r' ? 'r' : "pg" ? "g" : "normal"}>{singleMovie.Rated}</span></p>
        <p>Box office <span className='collections'>{singleMovie.BoxOffice}</span></p>

        <Link to="/" className="btn" >back</Link>
      </div>
    </section>
  )
}

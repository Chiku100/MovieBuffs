import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = ({ source, title, year, id }) => {
  const {setLoading}=useGlobalContext()
  return <Link  to={`/movie/${id}`} className='movie'> <article onClick={()=>setLoading(true)}>
    <img src={source} alt={title} />
    <div className="movie-info">
      <h4 className='title'>{title}</h4>
      <p>{year}</p>
    </div>
  </article>
  </Link>
}

export default Movies

import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import Loading from './Loading'
import { useGlobalContext } from './context'
const Home = () => {
  const { movies,loading } = useGlobalContext();
  const page = movies.map((item) => {
    return <Movies key={item.imdbID} id={item.imdbID} source={item.Poster} title={item.Title} year={item.Year} />
  })
  return loading?<Loading />: <section className='movies'>
    {page}
  </section>
}

export default Home

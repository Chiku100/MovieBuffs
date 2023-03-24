import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import Home from './Home'
import Movie from './Movie'
import About from './About'
function App() {
  
  return <main>
  
    <Navbar></Navbar>  
    <Switch>
      <Route exact path="/">
      <SearchForm />
        <Home />
      </Route>
      <Route path="/movie/:id">
        <Movie />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </Switch>
  </main>
}

export default App

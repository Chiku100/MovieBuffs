import React, { useState, useContext, useEffect } from 'react'
// make sure to use https

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [imdbid, setImdbid] = useState("")
  const [movies, setMovies] = useState([])
  const [loading,setLoading]=useState(true)
  const [value, setValue] = useState("movie")
  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=9cbe6859&y=""&s=${value}&i=${imdbid}`
    fetch(url).then(res => res.json()).then(log => { if (log.Response === 'True') { return setMovies(log.Search),setLoading(false) } })
  }, [value])
  return <AppContext.Provider value={{setLoading,loading, movies, value, setValue, setImdbid }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

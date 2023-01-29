import MovieCard from './MovieCard.jsx'
import FetchMovie from './FetchMovie.jsx'
import { useState } from 'react'


export default function MoviesList({ movies: propsMovies }) {
  const [stateMoviesTitles, setMovies] = useState([]);
  console.log('propsMovies',propsMovies);
  return (<div className="list">
    {  propsMovies.Search.map((movie,k) => <MovieCard movie={movie} key={k}/>)} 
   
    { stateMoviesTitles.map(Poster => <FetchMovie Poster={Poster} key={imdbID} />)}
    console.log(stateMoviesTitles);
    {/* <button onClick={() => setMovies(old => [...old, 1 + propsMovies.length + stateMoviesTitles.length])} >Next Movie</button>
    <input value={stateMoviesTitles} onInput={event=>setMovies(event.target.value)}/> */}
  </div>)
}

// function SmartInput({text,onEdit}){
//   return<>
//     <input value={text} onInput={event=>onEdit(event.target.value)}/>
    
//   </>
// }
import {useState,useEffect} from 'react'

import MovieCard from './MovieCard.jsx';

export default function FetchMovie({ Title }) {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
    try{
    let res = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s="+"red");
    console.log
      if (!res.ok) throw(new Error(res.status))
      let p = await res.json();
      console.log(p);
      setMovie(p);
    } catch(err) {
      setError(err);
      }
}
fetchData();
},[]); //// Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  if (error)
    return <div>Ошибка: {error.message}</div>
  else if (movie)
    return <MovieCard p={movie} />
  else
    return <div className="spinner" />
}

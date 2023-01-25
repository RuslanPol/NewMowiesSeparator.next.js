import MoviesList from '../components/MoviesList';


export default function Movies({movies}){
    return <MoviesList movies={[...movies]}/>
}
export async function getStaticProps(context) {
    const movies = [
        await (await fetch('https://www.omdbapi.com/?apikey=a2b07930&s=red')).json(),
        await (await fetch('https://www.omdbapi.com/?apikey=a2b07930&s=red2')).json()
    ]
    return {
      props: {movies}, // will be passed to the page component as props
    }
  }
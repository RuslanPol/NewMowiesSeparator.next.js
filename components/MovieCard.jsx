
import React from 'react';
export default function MovieCard({
    movie: {Title,Poster,imdbID,Year}
     
      }
    ) {
  
    return (
      <>
        <fieldset className="movie-card">
                
           <h3>{Title}</h3>
           <h3>{Year}</h3>
            <img className="poster" src={Poster} alt="Poster"/>
           <div>{imdbID}</div>
          
      </fieldset>
      </>
    ) 
  }
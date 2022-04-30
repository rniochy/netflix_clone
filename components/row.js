import axios from '../assets/axios';
import { useState, useEffect } from 'react';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])

    const baseURL = "https://image.tmdb.org/t/p/original";

    useEffect( ()=> {
         async function fetchData(){
             const request = await axios.get(fetchUrl);
              setMovies(request.data.results);
             return request;
         }
         fetchData();
    }, [fetchUrl]);
        
    return (
        <div className="row">
                <h2>{title}</h2>

        <div className="row__posters"> 
          { movies.map(movie=> (
              
              <img className={`row__poster ${isLargeRow && "row_posterLarge"} `} 
              key={movie.id}
              src={`${baseURL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name}/>
          ))
          }         
         </div>
        </div>
    );
        }


export default Row;

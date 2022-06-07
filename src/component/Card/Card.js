import './Card.css';
import React  from 'react';

const Card = ({movie,onBook}) => {

  const url = 'https://image.tmdb.org/t/p/original'

  return (

      <div  className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 Card" >


      <ul>
      
      <li className="text-xl font-medium text-black" key={movie.id}>
        {movie.title}
      </li>

      <li>
        
        <img src={url+movie.poster_path}  loading="lazy" alt="loading"/>

      </li>

      <li>
        {movie.overview.substring(0,150)}
      </li>


      <li>
        Popularity: {movie.popularity}
      </li>


      <li>
        Release Date: {movie.release_date}
      </li>

      <li>
              
          <i  className="text-slate-500 font-medium">  
          Votes: {movie.vote_average}
          </i>


      </li> 

      <li>

      <button   onClick={()=>{onBook(movie)}} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Book</button>

      </li>
    
    </ul>

      </div>

    );

  };
 
export default Card;

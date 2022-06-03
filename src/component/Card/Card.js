import './Card.css';
import React   from 'react';

const Card = (props) => {
 
  const url = 'https://image.tmdb.org/t/p/original'

  return (
      <>
          <div  className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 Card" >

        <ul>
             

            <li className="text-xl font-medium text-black" key={props.movie.id}>
              {props.movie.title}
            </li>

            <li>
              
              <img src={url+props.movie.poster_path}  loading="lazy"/>

            </li>
 
            <li>
               {props.movie.overview.substring(0,100)}
            </li>


            <li>
              {props.movie.popularity}
            </li>


            <li>
             {props.movie.release_date}
            </li>


            <li>
              {props.movie.backdrop_path}
            </li>

            <li className='cardFoor'>

              <i className="text-slate-500 font-medium">
        
                {props.movie.original_language}

              </i>

              <i className="text-slate-500 font-medium">
               {props.movie.video}
              </i>
                    
                <i  className="text-slate-500 font-medium">  
                {props.movie.vote_average}
                </i>

                <i  className="text-slate-500 font-medium">
                  {props.movie.vote_count}
                </i>

            </li> 

            <li>

            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">More...</button>

            </li>
            
            </ul>

          </div>

      </>
  );

  };
 
export default Card;

import './Grid.css';
import React, { useEffect, useState } from 'react';

import MovieApi from '../../api/moviesAPI' 
import Card from '../../component/Card/Card';

const Grid = () => {
  
  const [items, setItem] = useState([]);

  useEffect(() => 

    async () => {

      const [...movies] = await MovieApi.discover();
    
      setItem(movies)

   },[]);

  return (
    
    <div className="Grid">
      {
       items.map((it, i) => <Card movie={it} key={i}/>)
      }
    </div>
  );
 
};

export default Grid;

import "./Grid.css";
import React, { useEffect, useState } from "react";

import MovieApi from "../../api/moviesAPI";
import bookingApi from "../../api/bookingAPI";
import Card from "../../component/Card/Card";
import SideNav from "../../component/SideNav/SideNav"
import BookingDetail from "../../component/BookingDetail/BookingDetail"

const Grid = () => {

  const [items, setItem] = useState([]);
  const [show, setshow] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [history, setHistory] = useState([]);
  const [booking, setBook] = useState({});

  const loadMovies = () => {
    MovieApi.discover()
      .then((m) => {
        setItem(m);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  
  const loadBooking = () => {
    bookingApi.load()
    .then(bks =>{
      const {content} = bks;
      console.log(" contents is ",content)
      setHistory(content)
      setShowBooking(true)
     
    })
  }

  useEffect(() => {
      loadMovies();
      loadBooking();
  }, []);

  const onBook = (movie) => {
    setBook(movie)
    setshow(true)
  }

  const onDone = (booking) => {
    setshow(false)
    bookingApi.book(booking)
  }

  const onCancel = ()=>{
    setshow(false)
  }

  return (
    <>
  
    <div style={{ display: "flex" }}>

      <div className="Grid">
       
        {
        items.map((it, i) => (
          <>
          <Card movie={it} key={i} onBook={onBook}/>

          </>
        ))
        }
      </div>

       {show && (<BookingDetail activeBooking={booking} onDone={onDone} onCancel={onCancel}/>)}
      
       {!!history.length && (<SideNav books={history}/>)}

    </div>

    </>
  );
};

export default Grid;

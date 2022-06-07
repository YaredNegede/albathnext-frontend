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
  const [book, setBook] = useState({});

  const loadMovies = () => {
    MovieApi.discover()
      .then((m) => {
        setItem(m);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const onBook = (movie) => {
    setshow(true)
    setBook(movie)
  
  }
  const onDone = (booking) => {
    debugger;
    setshow(false)
    bookingApi.book(booking)
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

       {show && (<BookingDetail activeBooking={book} onDone={onDone}/>)}

        <SideNav key={1}/>

    </div>

    </>
  );
};

export default Grid;

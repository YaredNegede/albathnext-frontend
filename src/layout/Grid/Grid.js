import "./Grid.css";
import React, { useEffect, useState } from "react";

import MovieApi from "../../api/moviesAPI";
import bookingApi from "../../api/bookingAPI";
import Card from "../../component/Card/Card";
import SideNav from "../../component/SideNav/SideNav"
import BookingDetail from "../../component/BookingDetail/BookingDetail"
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Grid = () => {

  const [items, setItem] = useState([]);
  const [show, setshow] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [history, setHistory] = useState([]);
  const [booking, setBook] = useState({});

  const [searchString, setSearchString] = useState("");

  const handleOnSearch = (string, results) => {
    console.log(string, results);
    setItem(results);
  };

  const handleOnClear = () => {
    setSearchString("");
    loadMovies()
  };

  const clearSearchBox = () => {
    setSearchString("");
 
  };

  const handleOnSelect = (e) => {
    e.preventDefault();
    console.log("selected");
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left', cursor: 'pointer' }}> {item.title}</span>
      </>
    )
  }

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
       <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                <ul className="flex items-center flex-left mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li >
                    <div style={{width: 600,marginLeft:16}} className="block py-2 pr-4 pl-3">
                  
                    <ReactSearchAutocomplete
                        items={items}
                        fuseOptions={{ keys: ["title"] }}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        onClear={handleOnClear}
                        inputSearchString={searchString}
                        autoFocus
                        formatResult={formatResult}
                      />
                      
                    </div>          
                    </li>
                </ul>
              </div>
            </div>
       
          </nav>

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

import React, { useEffect} from "react";
import './SideNav.css';
import BookingCard from "../BookingCard/BookingCard"
import bookingApi from "../../api/bookingAPI";
import {BookingContext} from '../../layout/Home/Home'

const SideNav = () => {

  const books = React.useContext(BookingContext);  

  const load = () => {

    bookingApi.load()
    .then((m) => {
      books.push([...m.content])
    })
    .catch((err) => {
      
      console.err(err);
    });

  }
  
  useEffect(() => {

    load();

  },[]);

  const handleUpdate = (booking) => {
    console.log(booking)
   
  }

  const handleDelete = (booking) => {
    console.log(booking)
  }

  return (
    <div className="flex flex-col">{  
      books?.map((id) => (
            <BookingCard key={id} onDelete={handleDelete} onUpdate={handleUpdate}/>
          ))
        }
    </div>
  );

};

export default SideNav;

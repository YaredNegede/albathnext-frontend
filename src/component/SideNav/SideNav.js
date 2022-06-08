import React from "react";
import './SideNav.css';
import BookingCard from "../BookingCard/BookingCard"

const SideNav = ({books}) => {

  const handleUpdate = (booking) => {
    console.log(booking)
   
  }

  const handleDelete = (booking) => {
    console.log(booking)
  }

  return (
  <>
    <div className="flex flex-col">{  
  
      books?.map((booked,id) => (
            <BookingCard key={id} book={booked} onDelete={handleDelete} onUpdate={handleUpdate}/>
          ))
        }
    </div>
    </>
  );

};

export default SideNav;

import React,{useState,useEffect} from "react";
import './SideNav.css';
import BookingCard from "../BookingCard/BookingCard"
import bookingApi from "../../api/bookingAPI";

const SideNav = ({books}) => {

  const [bokkingLis,set] = useState(books)

  const handleDelete = (booking) => {
    bookingApi.cancel(booking)
    books = books.filter(m=> booking.id !== m.id)
    set(books)
  }

  return (
  <>
    <div className="flex flex-col">{  
  
    bokkingLis?.map((booked,id) => (
            <BookingCard key={id} book={booked} onDelete={handleDelete}/>
          ))
        }
    </div>
    </>
  );

};

export default SideNav;

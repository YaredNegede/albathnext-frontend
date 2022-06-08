import React from 'react';
import './BookingCard.css';

import * as moment from 'moment'
import { Film, Clock, MapPin, Users } from "react-feather";


const BookingCard = ({book,onDelete}) => {

  return (

      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex my-4">
        <div
          className="bg-cover bg-bottom h-56 md:h-auto md:w-32"
        >
                          <img src={'https://image.tmdb.org/t/p/original'+book?.movie?.poster_path}  loading="lazy" alt="loading"/>

        </div>

        <div className="w-full">
          <div className="p-4 md:p-2">
            <div className="flex m-2">
              <Film size={18} className="self-center mr-2" />
              <p>{book?.title}</p>
            </div>

            <div className="flex m-2">
              <Users size={18} className="self-center mr-2" />
              <p>{book?.numberofPerson}</p>
            </div>

            <div className="flex m-2">
              <Clock size={18} className="self-center mr-2" />
              <p>{moment(book?.dateTime).format('MMM DD YYYY, h:mm a') }</p>
            </div>

            <div className="flex m-2">
              <MapPin size={18} className="self-center mr-2" />
              <p>{book?.venu}</p>
            </div>

            <div className="flex justify-evenly ">
              <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>onDelete(book)}
                >
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>

  );

};

export default BookingCard;

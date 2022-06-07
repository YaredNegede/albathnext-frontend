import './BookingDetail.css';
import { Formik, Field } from 'formik';
import React, { useState } from "react";

const BookingDetail = ({activeBooking,onDone}) => {
  const [num, setNum] = useState(0);
  const [dateTime, setDateTime] = useState();
  const [venu, setVenu] = useState("");

  const booking = {
    movie:activeBooking,
    dateTime:dateTime,
    venu:venu,
    numberofPerson:num
  }

  const setNums = (event)=>{
    setNum(event.target.value);
    booking.numberofPerson=num
  }

  const setDateTimes = (event)=>{
    setDateTime(event.target.value)
    booking.dateTime = event.target.value
  }

  const setVenus = (event)=>{
    setVenu(event.target.value)
    booking.numberofPerson=event.target.value
  }

  return(

    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-2">
                 <Formik
                  initialValues={{
                    venu:activeBooking?.venu ?? '',
                    movie:activeBooking
                  }}
                >
                  <form className="w-full max-w-lg">
                  <div className="flex flex-col m-6">
                    <div className="">
                      <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Movie:  {activeBooking.title}
                      </label>
                      
                    </div>
                    <div className="">
                      <input value={num} onChange ={setNums} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="number of persons"/>
                      
                    </div>
                    <div className="">
                      <Field name="venu"  value={venu} onChange={setVenus} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="City Cinema"/>
                      
                    </div>
                    <div className="">
                      <Field  value={dateTime} onChange={setDateTimes} name="dateTime" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="date" />
                    
                    </div>
                    <button
                            type="button"
                            onClick={()=>{
                              booking.movie = activeBooking;
                              onDone(booking)
                            }
                            }
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Update
                          </button>
                  </div>
                </form>
                </Formik>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>

  )
}

export default BookingDetail;

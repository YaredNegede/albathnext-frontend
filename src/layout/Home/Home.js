import Grid from '../Grid/Grid';
import './Home.css';
import React , { useState }  from 'react';
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export const BookingContext = React.createContext();

const Home = () => {

  const [searchString, setSearchString] = useState("");

  const [items, setItem] = useState("");

  const book = false

  const handleOnSearch = (string, results) => {
    console.log(string, results);
    setItem(string);
    
  };

  const handleOnClear = () => {
    setSearchString("");
  };

  const clearSearchBox = () => {
    setSearchString("");
  };


  return(
 
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
                        onClear={handleOnClear}
                        inputSearchString={searchString}
                        autoFocus
                      />
                    </div>          
                    </li>
                </ul>
              </div>
            </div>
       
          </nav>

        <BookingContext.Provider value={book}>
          
          <Grid/>

        </BookingContext.Provider>

     </>

  )
}

export default Home;

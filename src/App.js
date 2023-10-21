import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import DarkMode from "./components/DarkMode/DarkMode";
import './App.css';
// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (

  
   
<div className="App">
   <header className="App-header">
   <ImageContext.Provider value={value}>

   <Jumbutron>
        <SearchField />
      </Jumbutron>
      <DarkMode/>
      <Images />
    </ImageContext.Provider>
     
      </header>
    </div>
      
     
  );
}

export default App;

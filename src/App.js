import { useEffect } from "react";
import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=c5871e50';

const App =() => {
  const searchMovies= async (title)=> {
    const response= await fetch(`${API_URL}&s={title}`);
    const data= await response.json();

    console.log(data.Search);
  }

 useEffect=(()=>{
searchMovies(`Spiderman`);
 }, []);
  return (
    <div className="App">
     <h1>Movieland</h1>
     <div className="search"> 
     <input
     placeholder="search for movies"
     value="Sistas"
     
     />
     </div>
    </div>
  );
}

export default App;

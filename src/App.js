import { useEffect } from "react";
const API_URL='http://www.omdbapi.com/?apikey=c5871e50';

const App =() => {
  const searchMovies= async (title)=> {
    const response= await fetch(`${API_URL}&s={title}`);
  }

 useEffect=(()=>{

 }, []);
  return (
    <div className="App">
     
    
     
    </div>
  );
}

export default App;

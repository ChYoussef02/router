import React, { useState } from "react";
import "./App.css";
import Add from "./AddModal";
import { v4 as uuid4} from "uuid";
import ListMovies from "./MovieList";
import img from "./fast and furious.jpg";
import img2 from "./prestige.jpg";
import img3 from "./wrath.jpg";
import Filter from "./Filter";
import { Switch,BrowserRouter,Route } from "react-router-dom";
import MovieDec from './MovieDec'





const App = () => {
  const [filter, setFilter] = useState("")
  const [rating, setRate] = useState(1)

  const [movies, setMovies] = useState([
    {
      id: uuid4(),
      name: "fast and furious ",
      Image: img,
      rating: 4,
      Description: "After the events in the previous installment, The Fate Of the Furious, Cypher decides to seek help from Jacob, Dom's younger brother, in order to carry out a plan of revenge against Dom and his team.",
      mylink : "https://www.youtube.com/embed/FqAjVAf5fNA"
    },
    {
      id: uuid4(),
      name: "prestige ",
      Image: img2,
      rating: 3,
      Description: "Robert Angier (Hugh Jackman) and Alfred Borden (Christian Bale) are friends one day as wizards who work together until Robert's wife dies in an unsuccessful magic trick. The two turn into enemies who are always trying to challenge each other but turn this challenge into an obsession for Robert yet. Alfred's last trick.",
      mylink : "https://www.youtube.com/embed/RLtaA9fFNXU"   
    },
    {
      id: uuid4(),
      name: "wrath of Man ",
      Image: img3,
      rating: 5,
      Description: "The work deals with the story of a man who drives money trucks, carrying billions of cash daily in the suburbs of Los Angeles, and faces many dangers and difficulties on his way.",
      mylink : "https://www.youtube.com/embed/EFYEni2gsK0"    
    }

  ])
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (value) => {
    setFilter(value)
  }
  const handleRate = (val) => {
    setRate(val)
  }
  return (
    <div className="App">
      <header className="App-header" >
           <BrowserRouter>
             <Switch>
       <route exact path='/'>
       <Filter handleFilter={handleFilter} handleRate={handleRate} />
        <h1> movies </h1>
        <ListMovies movies={movies.filter(el => el.name.trim().toUpperCase().includes(filter.toUpperCase().trim()) && el.rating >= rating)} />
        <Add handleAdd={handleAdd} />
        

       </route>
       <Route path='/description/:id'>
            <MovieDec movies={movies}/>
          </Route>
        </Switch>
        </BrowserRouter>
      </header>
     

    </div>
  );


}


export default App
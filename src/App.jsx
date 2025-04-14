import React, { useState } from "react";
import Gallery from "./components/Gallery";
import "./styles/styles.css";

function App() {
  //Glbl state to hold list of tours
  const [tours, setTours] = useState([]);

  //Function to remove a tour by its ID

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Explorer</h1>
      {/* Pass state and handlers down to the Gallery component */}
   <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
    </main>
  )
}

export default App;
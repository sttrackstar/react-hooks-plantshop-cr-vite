import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addPlant={addPlant} />
    </div>
  );
}

export default App;
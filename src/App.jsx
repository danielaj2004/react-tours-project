import { useState } from "react";
import TourList from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";

function App() {
    const [tours, setTours] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState("");
 
    const onRemove = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };// To remove a tour from the list

    const filteredTours = selectedDestination
        ? tours.filter((tour) => tour.name === selectedDestination)
        : tours; // Filter tours based on chosen destination

    return (
        <>
            <h1>Tour Explorer</h1>
            <DestinationSelector
                tours={tours}
                onDestinationChange={setSelectedDestination}
            />
            <TourList tours={filteredTours} setTours={setTours} onRemove={onRemove} />
        </>
    );
}

export default App;

import React, { useState, useEffect } from 'react'; // import react
import TourCard from './Tourcard'; // import tour card

const Gallery = ({ tours, setTours, onRemove }) => { // gallery component
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(false); // error state
    
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'); // fetch data from API
            if (!response.ok) throw new Error('Failed to fetch tours');
            const data = await response.json();
            setTours(data);
            setLoading(false); // loading to false data after being fetched
          } catch (err) {
            setError(err.message); // setting error message
            setLoading(false); // setting loading to false if error present
          }
        }; 
        fetchTours();
    }, [setTours]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (tours.length === 0) return <div className="no-tours">No tours left. Try Again.</div>;

    return ( // Added return statement here
        <div className="gallery">
            {tours.map(tour => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default Gallery; // export gallery component
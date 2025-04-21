// Create a list of the destinations
function DestinationSelector({ tours, onDestinationChange, selectedDestination }) {
    const uniqueDestinations = ['all', ...new Set(tours.map(tour => tour.name))]; 
    
    // Handle the change event when a new destination is selected
    const handleChange = (e) => {
      onDestinationChange(e.target.value); // Update the selected destination in the parent component
    };
    
    return (
      <div className="destination-selector">
      <label htmlFor="destination">Select Destination: </label>
      
      <select 
        id="destination" 
        value={selectedDestination} // Controlled component bound to selectedDestination
        onChange={handleChange} 
      > 
        {/* Map through uniqueDestinations to create option elements */}
        {uniqueDestinations.map(destination => (
        <option key={destination} value={destination}>
          {destination === 'all' ? 'All Destinations' : destination} {/* Display 'All Destinations' for the 'all' option */}
        </option>
        ))}
      </select>
      </div>
    ); 
    }
    
    export default DestinationSelector;
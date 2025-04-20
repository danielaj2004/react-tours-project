import { useState } from 'react'; // import react

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false); 
  
    return (
      <div className="tour-card">
        <img src={image} alt={name} />
        <div className="tour-info">
          <div className="tour-header">
            <h3>{name}</h3>
            <span className="price">${price}</span>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button 
              className="read-more" 
              onClick={() => setReadMore(!readMore)}
              aria-label={readMore ? 'Show less information' : 'Read more information'}
            >
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <button 
            className="not-interested" 
            onClick={() => onRemove(id)}
            aria-label={`Remove ${name} from the list`}
          >
            Not Interested
          </button>
        </div>
      </div>
    );
  };
  
export default TourCard;
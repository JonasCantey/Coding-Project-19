import React, {useState} from "react";

//TourCard renders individual book details
const TourCard = ({id, name, info, image, price, onRemove}) => {
    //local state to toggle read more / show less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
    )
}

export default TourCard;
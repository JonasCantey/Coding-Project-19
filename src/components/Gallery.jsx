import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

//Gallery is responsible for fetching tours and rendering list

const Gallery = ({tours, setTours, onRemove}) => {
    //Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from the API

    const fetchTours = async () => {
        try {
            const response = await fetch("https://course-api.com/react-tours-project")
            //map the api data to only the field needed

            const trimmed = data.results.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image
            }));
           setTours(trimmed);
           setLoading(false);
    } catch (error) {
        setError(true);
        setLoading(false);
    }
};

//Run fetchTours once after component mounts
useEffect(() => {
    fetchTours();
}, []);

//render loading state

if (loading) {
    return <h2>Loading...</h2>
};

if (error) {
    return <h2>Something went wrong...</h2>
};

//render if no tour remain

if (tours.length === 0) {
    return <h2>No tours left</h2>;
    <button onClicl={fetchTours}>Refresh</button>;
    //render the list of TourCards
return (
    <section className="tour-list">
        {tours.map((tour) => {
            return (
                <TourCard
                key={tour.id}
                {...tour}
                onRemove={onRemove}
                />
            );
        })}
    </section>
);
};

};

export default Gallery;

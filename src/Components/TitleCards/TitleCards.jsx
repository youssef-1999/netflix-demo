import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import CarouselCards from "../CarouselCards/CarouselCards.jsx";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
function TitleCards({ title,category }) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWE1MmQ2NDVlNWMyNTU5MGYwZDNkYTEwNDU4NTQ0NiIsIm5iZiI6MTc2MTY3NTU4OC40NjIwMDAxLCJzdWIiOiI2OTAxMDk0NDdlNjM1Nzc1MDYzYzAyYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C7yCZb_bXw2Yg3iFO2GOsoeFynzxShBRR5Qa4eF_Zxg",
    },
  };
  const getData = () => {

    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`,
      options
    )
    .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setApiData(res.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  },[category]);

  return (
    <div className="title_cards p-2">
      <div className="container">
        {isLoading ? <FaSpinner />:
         <CarouselCards title={title}>
          {apiData.map((card, index) => (
            <Link className="text-decoration-none text-white" to={`/player/${card.id}`}>
            <div className="card-list me-2" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} className="card-img" />
              <p className="card-name">{card.original_title}</p>
            </div>
            </Link>
          ))}
        </CarouselCards>}
       
      </div>
    </div>
  );
}

export default TitleCards;

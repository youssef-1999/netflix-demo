import React, { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const {id}=useParams();
  const navigate=useNavigate()

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWE1MmQ2NDVlNWMyNTU5MGYwZDNkYTEwNDU4NTQ0NiIsIm5iZiI6MTc2MTY3NTU4OC40NjIwMDAxLCJzdWIiOiI2OTAxMDk0NDdlNjM1Nzc1MDYzYzAyYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C7yCZb_bXw2Yg3iFO2GOsoeFynzxShBRR5Qa4eF_Zxg'
    }
  };
  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  });

  const [loading, setLoading] = useState(false)
  const getData=()=>{
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res =>{ console.log(res)
  setApiData(res.results[0])
  setLoading(false)
  })
  .catch(err => console.error(err));
  }



  useEffect(() => {
getData()
  },[id])
  return (
    <div className="player">
      <div className="container">
        <div className="back_icon" >
          <img src="/assets/back_arrow_icon.png" onClick={()=>navigate(-1)} className="w-100" alt="Back" />
        </div>

      {loading ? (
          <p style={{ color: "#fff", textAlign: "center" }}>Loading trailer...</p>
        ) : apiData.key ? (
          <>
            <div className="video_wrapper">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${apiData.key}`}
                title={apiData.name || "Trailer"}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>

            <div className="player_info">
              <p>📅 {apiData.published_at.slice(0,10)}</p>
              <p>🎬 {apiData.name}</p>
              <p>🎞️ {apiData.type}</p>
            </div>
          </>
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>No trailer found.</p>
        )}
      </div>
    </div>
  );
}

export default Player;

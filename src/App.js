import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

  function getRandomIndex() { 
    return Math.floor(Math.random() * 6236);
  }

  var randomAyah=getRandomIndex();
  var x="https://api.alquran.cloud/v1/ayah/"+randomAyah+"/editions/en.sahih";
  var API =x;

const App = () => {
  const[ayah, setAyah]=useState([])
  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setAyah(d.data);
      });
  }, []);
 
  const setRandomAyah = () => {
    randomAyah=getRandomIndex();
  x="https://api.alquran.cloud/v1/ayah/"+randomAyah+"/editions/en.sahih";
  API =x;
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setAyah(d.data);
      });
  };

  
  const tweetURL='https://twitter.com/intent/tweet';

  return (
    
    <div className="test d-flex align-items-center justify-content-center">
      <div id="quote-box" className="col-6 box p-5 rounded">
        <div className="mb-4">
          <p id="text">{
          ayah[0]?.text}</p>
          <cite id="reference" className="d-block text-end">-Quran, {ayah[0]?.surah.number}:{ayah[0]?.numberInSurah}</cite>
        </div>
        <div className="d-flex justify-content-between">
          <a id="tweet-quote" className="btn btn-primary btn-sm" href={tweetURL}>
           <i className="fab fa-twitter"></i> Tweet
          </a>
          <button id="new-quote" className="btn btn-primary btn-sm" onClick={setRandomAyah}>
            <i className="fas fa-random"></i> Get Ayah
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

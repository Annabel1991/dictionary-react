import React, { useState } from "react";
import "./Dictionary.css"
import axios from 'axios';
import Result from "./Result.js";
import Images from "./Images";

  export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [images, setImages] = useState(null);
  
    function handleResponse(response) {
      setResults(response.data);
    }
    function handleImagesResponse(response) {
      setImages(response.data.photos);
    }
    function search(event) {
      event.preventDefault();
  
      let apiKey = `dt229oa84d9dabc42ffabf7f5e40f673`;
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  
      axios.get(apiUrl).then(handleResponse);
  
      let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}}&key=${apiKey}`;
  
      axios.get(imagesApiUrl).then(handleImagesResponse);
    }
  
    function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }
  
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <h3>What word do you want to look up?</h3>
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search for a word"
              className="form-control"
              onChange={handleKeywordChange}
            />{" "}
          </form>
         <div className="hint"> i.e. home, ocean, love...</div>
        </section>
        <Result results={results} />
        <Images images={images} />
      </div>
    );
  }
    
    
    
    
    
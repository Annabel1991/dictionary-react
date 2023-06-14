import React, { useState } from "react";
import "./Dictionary.css"
import axios from 'axios';
import Result from "./Result.js";
import Images from "./Images";
import { ThreeDots } from "react-loader-spinner";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
  
    function handleDictionaryResponse(response) {
      setResults(response.data);
    }
  
    function handleImagesResponse(response) {
      console.log(response);
      setPhotos(response.data.photos);
    }
  
    function search() {
      const apiKey = "dt229oa84d9dabc42ffabf7f5e40f673";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleDictionaryResponse);
  
      const imagesApiKey = "dt229oa84d9dabc42ffabf7f5e40f673";
      let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
      axios.get(imagesUrl).then(handleImagesResponse);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
  
    function handleKeywordCange(event) {
      setKeyword(event.target.value);
    }
  
    function load() {
      setLoaded(true);
      search();
    }
  
    if (loaded) {
      return (
        <div className="Dictionary">
          <section>
            <h1>What word do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordCange}
                autoFocus={true}
                defaultValue={props.defaultKeyword}
              />
            </form>
            <div className="hint">suggested words: home, ocean, love...</div>
          </section>
          <Result results={results} />
          <Images photos={photos} keyword={keyword} />
        </div>
      );
    } else {
      load();
      return (
        <ThreeDots
          height="80"
          width="1500"
          radius="100"
          color="#14BAC3"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      );
    }
  }
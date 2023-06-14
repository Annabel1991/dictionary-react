import React, { useState } from "react";
import "./Dictionary.css"
import axios from 'axios';

export default function Dictionary(params) {
    let [keyword, setKeyword]=useState("");

    function handleResponse(response){
console.log(response.data)
    }
    function search (event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`)
        let apiUrl="https://api.shecodes.io/dictionary/v1/define?word={keyword}&key=dt229oa84d9dabc42ffabf7f5e40f673";
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    
  return <div className="Dictionary">
    <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}/>
    </form>
  </div>  
}
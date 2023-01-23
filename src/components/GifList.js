import React from "react";

function GifList({gifs}){
  return (
    <ul>
      {gifs.map((gif) => (
        <li className='list' key={gif.url}>
          <img className='image' src={gif.url} alt="gif" />
        </li>
      ))}
  </ul>

  )   
}

export default GifList;
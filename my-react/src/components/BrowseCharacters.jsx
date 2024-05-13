import React from "react"
import CharacterList from "./CharacterList"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import NavBar from "./Nav"

{/*BrowseCharacters shows a list of characters from the Marvel Api before typing in the search bar.*/}


function BrowseCharacters () {
  const [url,setUrl]=useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8093389167a219d73d349091d548fc1d&hash=40a18eefc47e351b0856f0ab278f1a3f&limit=30')
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchCharacter=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=8093389167a219d73d349091d548fc1d&hash=40a18eefc47e351b0856f0ab278f1a3f&limit=40`)
  }

  return (
    <>
    <NavBar/>
    <h1>Browse Characters</h1>
    <br/>
        <div className="header">
            <div className="bg">
            </div>
            <div className="search-bar">
                <input type="search" placeholder='Search for a character...'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onClick={searchCharacter}/>
                 <button onClick={searchCharacter}>Search</button>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<CharacterList data={item}/>
        }
       </div>
    </>
  )
}

export default BrowseCharacters;

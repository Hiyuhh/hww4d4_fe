import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';


function CharacterDetails() {
  const {id}=useParams();
  const [item,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=8093389167a219d73d349091d548fc1d&hash=40a18eefc47e351b0856f0ab278f1a3f`)
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!item)? "":(
        <div>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
        </div>
      )
    }
    </>
  )
}

export default CharacterDetails

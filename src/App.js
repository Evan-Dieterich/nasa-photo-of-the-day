import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [data , setData] = useState("")
  useEffect(()=>{
   axios
   .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
   .then(res=>{
     setData(res.data)
   })
   .catch(err=>{
     console.log(err)
   })
  },[])

  return (
    <div className='App'>
       <div className = 'Header'>
          <h1>Nasa POTD</h1>
       </div>
       <img src={data.url} alt={data.title}/>
    </div>
  );
}

export default App;
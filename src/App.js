import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import "./App.css";

function App() {

  const Background = styled.body`
  background-color: blue;
  margin: 0 auto;
`
  const TitleStyle = styled.div`
  font-family: 'Helvetica',
  color: white;
  border: 1px solid white;
`

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
      <Background>
       <div className = 'Header'>
          <TitleStyle><h1>Nasa POTD</h1></TitleStyle>
       </div>
      </Background>
       <img src={data.url} alt={data.title}/>
    </div>
  );
}

export default App;

//testing for new commit
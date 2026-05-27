import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card'//yaha humne import kiya hai dusri jsx file ka function use krne k liye 
import Nav from './component/NavBar'
const App=()=>{
  return (
    
  <div>
  <Card user="aman"/>
   <Card user="Happy"/>
   <Card user="Himanshu"/>
   <Nav item="NavBar"/>
  </div>
  
  )
};

export default App

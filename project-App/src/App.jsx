import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
 import Card from './component/Card'//yaha humne import kiya hai dusri jsx file ka function use krne k liye 
// import Nav from './component/NavBar'
const App=()=>{
  return (
<div className="Apps">
 <Card price="400$"/>
  <Card price="300$"/>
    <Card price="700$"/>

</div>
  )
};

export default App

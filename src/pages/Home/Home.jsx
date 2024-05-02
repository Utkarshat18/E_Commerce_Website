import React,{useState} from 'react'
import './Home.css'
import Homepage from '../../components/Homepage/Homepage'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplayy from '../../components/Fooddisplay/Fooddisplayy'


const Home = () => {
    const [category,setCategory]=useState("All");
  return (
    <div>
      <Homepage/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplayy category={category}/>
    </div>
  )
}

export default Home

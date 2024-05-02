import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../contextt/Storecontext'
import Fooditem from '../Fooditem/Fooditem'

const Fooddisplayy = ({ category }) => {
    const { food_list } = useContext(Storecontext)
    return (
        <div className='food-display' id='food-display'>
            <h1> Top dishes near you</h1>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if(category==="All" || category===item.category)
                    {
                    return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default Fooddisplayy

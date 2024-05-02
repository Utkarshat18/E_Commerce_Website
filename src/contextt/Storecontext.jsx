import { createContext ,useState,useEffect} from "react";
import { food_list } from "../assets/assets";

export const Storecontext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems , setCartItems]=useState({});

    const addToCart = (itemId)=>{

        // if statement will create a new item entry if it is not present previsiouly
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }

        //else conditiion will increase the value by one
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <>
            <Storecontext.Provider value={contextValue}>
                {props.children}
            </Storecontext.Provider>
        </>
    )
}

export default StoreContextProvider;
import React, { createContext, useState } from 'react'
import all_product from '../components/assets/all_products'

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    const cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContectProvider =(props)=>{
    
    const [cartItem, setCartItem] = useState(getDefaultCart());
    
    
    const addToCart =(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        
    }
    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem)
        {
            if (cartItem[item]>0)
            {
                let itemInfo= all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price* cartItem[item];
            }
            
        }
        return totalAmount;
    }


    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item];
            }
        }
        return totalItem
    }



    const contextValue={getTotalCartAmount,getTotalCartItems, cartItem, all_product, addToCart, removeFromCart};
  
    

    return(
        <ShopContext.Provider  value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContectProvider;
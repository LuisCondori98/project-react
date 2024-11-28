import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])



    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        } else {
            alert("producto ya esta agregado")
        }
    }

    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))

    const removeItem = (id) => {
        const cartUpdated =  cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.Precio
        }) 

        return total
    }

    const total = getTotal()

    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, total}}>
         { children }
        </CartContext.Provider>
    )
}
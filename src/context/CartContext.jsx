import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    totalPrice: 0,
    clearCart: () => { }
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error('El producto ya está agregado')
        }
    }

    console.log(cart)

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        console.log(`id del prod: ${id}`)
        setCart(cartUpdate)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotalPrice = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.price * prod.quantity
        })

        return accu
    }

    const totalPrice = getTotalPrice()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => {
    return useContext(CartContext)
}

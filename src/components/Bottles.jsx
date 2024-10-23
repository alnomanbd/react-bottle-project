import { useEffect } from "react"
import { useState } from "react"
import Bottle from "./Bottle"
import './bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utils/localStorage"
import Cart from "./Cart"

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        // console.log(storedCart)
        if (bottles.length) {
            const storedCart = getStoredCart()
            const savedCart = []
            for (const id of storedCart) {
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart)
            setCart(savedCart)
        }
    }, [bottles])

    const handleAddToCart = (bottle) => {
        console.log(bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLS(id)
    }

  return (
      <div>
          <h2>Bottles Available : {bottles.length}</h2>
          {/* <h4>Cart: {cart.length}</h4> */}
          <Cart cart={cart} handleRemoveFromCart={ handleRemoveFromCart} />
          <div className="bottle-container">
            {bottles.map((bottle) => (
                <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
            ))}
          </div>
    </div>
  )
}

export default Bottles
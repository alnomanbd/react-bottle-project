const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return []
}

const saveCartToLS = (cart) => {
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString)
}

const addToLS = (id) => {
    const cart = getStoredCart()
    cart.push(id)
    saveCartToLS(cart)
}

const removeFromLS = (id) => {
    const cart = getStoredCart()
    const remaining = cart.filter(id => id !== id)
    saveCartToLS(remaining)
}

export {addToLS, getStoredCart, removeFromLS}
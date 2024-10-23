import './cart.css'
function Cart({ cart, handleRemoveFromCart }) {
  return (
      <div>
          <h4>Cart: {cart.length}</h4>
          <div className="cart-container">
              {cart.map((bottle) => (
                  <div key={bottle.id}>
                      <img src={bottle.img} alt="" />
                      <p>Price: {bottle.price}</p>
                      <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Cart
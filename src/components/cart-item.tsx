import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type cartItemsProps = {
    cartItem : CartItem ; 
    incrementHandler : (cartItem: CartItem)=> void ;
    decrementHandler : (cartItem: CartItem)=> void ;
    removeHandler : (id : string)=> void ;

}; 

const cartItems= ({cartItem , incrementHandler , decrementHandler ,removeHandler}: cartItemsProps) => {
    const {photo , productId, name , price, quantity} = cartItem;
  return (

    
    <div className="cart-item">

  <img src={`${server}/${photo}`} alt={name}/>
  <article>
    <Link to={`product/${productId}`}>{name}</Link>
    <span>₹{price}</span>
  </article>

  <div>
    <button onClick={() => decrementHandler(cartItem)}>-</button>
    <span>{quantity}</span>
    <button onClick={() => incrementHandler(cartItem)}>+</button>
  </div>

  <button onClick={() => removeHandler(productId)}>
    <FaTrash/>
  </button>

    </div>
  )
}

export default cartItems; 
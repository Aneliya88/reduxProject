import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishID);
    const dispatch = useDispatch();
    return ( <div>
       <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
    </div>
    )
}
export default CartItem;


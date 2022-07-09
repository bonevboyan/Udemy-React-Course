import { useSelector } from "react-redux/es/exports";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = useSelector((state) => {
        return state.cart.items;
    });

    let itemsJsx = <p>Cart is empty.</p>;

    if (cartItems.length !== 0) {
        itemsJsx = cartItems.map((item) => <CartItem key={item.id} item={item} />);
    }

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{itemsJsx}</ul>
        </Card>
    );
};

export default Cart;

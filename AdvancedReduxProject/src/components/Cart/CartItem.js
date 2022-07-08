import { useDispatch } from "react-redux/es/exports";

import classes from "./CartItem.module.css";

import { cartActions } from "../../store/cart";

const CartItem = (props) => {
    const dispatch = useDispatch();

    const { id, title, quantity, price } = props.item;
    const total = quantity * price;

    const plusButtonHandler = () => {
        dispatch(cartActions.addItem({ id }));
    };

    const minusButtonHandler = () => {
        dispatch(cartActions.removeItem(id));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={minusButtonHandler}>-</button>
                    <button onClick={plusButtonHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;

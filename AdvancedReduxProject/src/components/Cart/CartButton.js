import { useSelector, useDispatch } from "react-redux/es/exports";

import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cart";

const CartButton = (props) => {
	const dispatch = useDispatch();

    const totalCount = useSelector((state) => state.cart.totalItems);

	const toggleCartHandler = () => {
		dispatch(cartActions.changeVisibilty());
	}

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalCount}</span>
        </button>
    );
};

export default CartButton;

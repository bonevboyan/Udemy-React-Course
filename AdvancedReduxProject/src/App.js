import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cart.isShown);
    const cart = useSelector((state) => state.cart.items);
    const notification = useSelector((state) => state.cart.notification);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;

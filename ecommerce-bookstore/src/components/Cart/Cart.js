import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import styles from "./css/Cart.module.css";
import { Button } from "./../UI/Button";
import { ordersAction } from "../../redux/slices/ordersSlice";
import { cartActions } from "../../redux/slices/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(function (state) {
    return state.cart.books;
  });

  const totalAmount = useSelector(function (state) {
    return state.cart.totalPrice;
  });

  const content = cartItems.map(function (book) {
    return <CartItem item={book} key={book.id} />;
  });

  const totalPrice = totalAmount + 5.0 + 7.5;
  const checkoutHanlder = function () {
    dispatch(ordersAction.addOrders(cartItems));
    dispatch(cartActions.emptyCart());
  };

  return (
    <div className={styles.cart}>
      <div className={styles["cart-items"]}>{content}</div>
      {totalAmount === 0 && (
        <h2 className={styles.empty}>
          Your Cart is empty. Add your favourite books!!! Hurry up
        </h2>
      )}
      {totalAmount > 0 && (
            <div className={styles.total}>
              <h1>Payment Info</h1>
              <div className={styles.payment}>
                <span>Items Price</span>
                <span>{totalAmount.toFixed(2)}</span>
              </div>
              <div className={styles.payment}>
                <span>Tax</span>
                <span>$ 7.50</span>
              </div>
              <div className={styles.payment}>
                <span>Shipping Charge</span>
                <span>$ 5.00</span>
              </div>
              <hr />
              <div className={styles.payment}>
                <span>Total </span>
                <span>{`$ ${totalPrice.toFixed(2)}`}</span>
              </div>
              <Button handler={checkoutHanlder}>Checkout</Button>
            </div>
      )}
    </div>
  );
};

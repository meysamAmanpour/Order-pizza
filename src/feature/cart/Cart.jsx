import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div>
      <ul className="divide-y border-b px-4 py-3  flex flex-col">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-8">
        <Button type="primary" to="/order/new">
          order Pizza
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

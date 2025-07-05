import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartOverview() {
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    )
  );

  return (
    <div className="flex justify-between bg-stone-600 text-stone-50 font-semibold px-4 py-3 ">
      <p className="space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}$</span>
      </p>
      <Link to="/cart">open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

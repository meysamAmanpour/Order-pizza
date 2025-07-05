import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ item }) {
  // const cart=useSelector(state=>state.cart.cart.find(pizza=>pizza.pizzaId===item.id));

  const dispatch = useDispatch();

  const { name, imageUrl, id, ingredients, soldOut, unitPrice } = item;
  const currentQuantity = useSelector((state) =>
    state.cart.cart.find((pizza) => pizza.pizzaId === id)
  )?.quantity;

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      name,
      pizzaId: id,
      quantity: 1,
      unitPrice,
      // totalPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className=" p-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <p>{name}</p>
      <p className="italic text-stone-400">{ingredients.join(", ")}</p>
      <div className="flex items-center justify-between">
        {soldOut ? <p>soldOut</p> : <p>{unitPrice}$</p>}
        {isInCart && (
          <div className="flex items-center gap-12">
            <UpdateItemQuantity
              currentQuantity={currentQuantity}
              pizzaId={id}
            />
            <DeleteItem pizzaId={id} />
          </div>
        )}
        {!soldOut && !isInCart && (
          <Button type="small" onClick={handleAddToCart}>
            add to cart
          </Button>
        )}
      </div>
    </li>
  );
}
export default MenuItem;

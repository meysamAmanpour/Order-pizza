function OrderItem({ item, isLoadingIngredient, ingredients }) {
  const { name, quantity, unitPrice } = item;

  return (
    <li className="">
      <div>
        <span>{quantity}&times; </span>
        <span>{name}</span>
        <p className="italic text-sm text-slate-500">
          {isLoadingIngredient ? "loading..." : `${ingredients.join(", ")}`}
        </p>
        <p>unit price: {unitPrice} $</p>
      </div>
    </li>
  );
}

export default OrderItem;

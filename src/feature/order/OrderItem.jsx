function OrderItem({item, isLoadingIngridient, ingridient}) {
const {name,quantity,unitPrice}=item

    return (
        <li className="">
            <div>
                <span>{quantity}&times; </span>
                <span>{name}</span>
                <p className="italic text-sm text-slate-500">{isLoadingIngridient ? "loading..." : {ingridient}}</p>
                <p>unit price: {unitPrice} $</p>
            </div>
        </li>
    )
}

export default OrderItem

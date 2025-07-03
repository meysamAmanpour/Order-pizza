import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity"

function CartItem({pizza}) {
    const {name,quantity,unitPrice}=pizza;
    // const totalPriceItem=unitPrice*quantity;
   
    return (
        
     <li className="flex items-end justify-between">
            <div className=" flex flex-col gap-2">  
                <p> <span>{quantity}x</span> {name}</p>
                <p className="flex flex-col gap-1 ">
                <span> unit price: {unitPrice} $</span>
                {/* <span>total price {unitPrice*quantity} $</span> */}
                </p>
            </div>
            <div className="flex items-center gap-6 mb-3">
                    <UpdateItemQuantity pizzaId={pizza.pizzaId} currentQuantity={quantity}/>
                    <DeleteItem pizzaId={pizza.pizzaId}/>            
            </div>  
     </li>
    )
}

export default CartItem;

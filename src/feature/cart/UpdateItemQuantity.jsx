import Button from "../../ui/Button"
import {useDispatch} from "react-redux"
import { decreaseItemCart, increaseItemCart } from "./cartSlice"

function UpdateItemQuantity({
    currentQuantity,pizzaId
}) {
    const dispatch=useDispatch()
    return (
        <div className="flex items-center gap-4">
            <Button type="primary" onClick={()=>dispatch(decreaseItemCart(pizzaId))}>-</Button>
            <span className="bg-stone-200 px-2 py-1 rounded-full">{currentQuantity}</span>
            <Button type="primary" onClick={()=>dispatch(increaseItemCart(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity

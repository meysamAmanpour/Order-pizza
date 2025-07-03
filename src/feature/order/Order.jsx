import { useFetcher, useLoaderData } from "react-router";
import {getOrder} from "../../services/apiRestaurant"
import OrderItem from "./OrderItem";
import { calcMinutesLeft } from "../../utils/helpers";
import { useEffect } from "react";

function Order() {

const fetcher=useFetcher();

useEffect(function(){
fetcher.load("/menu")
console.log(fetcher)
},[])

const order=useLoaderData();
const {id,priority,estimatedDelivery,cart,status,priorityPrice,
    orderPrice} =order
    const delivery=calcMinutesLeft(estimatedDelivery)
    return (
        <div className="px-6 py-4 space-y-8" >

          <div className="uppercase flex items-center justify-between bg-stone-300 px-4 rounded-lg py-6">
            <h2>order # {id} status</h2>
            <div className="flex items-center justify-between gap-8 text-slate-50 font-semibold">
              {priority && <span className=" bg-red-600 px-2 py-1 rounded-full" >priority</span>}
              <span className="bg-green-600 px-2 py-1 rounded-full">{status} order</span>
            </div>
          </div> 

          <ul className="divide-y divide-gray-400 border-t-2 border-b-2 bg-stone-200 px-4 py-2">

            {cart.map(item=><OrderItem item={item} isLoadingIngridient={fetcher.state==="loading"} ingridients={fetcher?.data?.find(item=>item.pizzaId===id)?.ingridients} key={item.pizzaId}/>)}

          </ul>

          <div className=" bg-gray-300 px-4 py-2 flex items-center justify-between">
            <div>
            <p>order price:{orderPrice} $</p>
            <p>priority price:{priorityPrice} $</p>
            <p>total price: {orderPrice+priorityPrice} $</p>
            </div>
            <div className="px-8 text-lg font-semibold italic bg-green-500 rounded-full py-2">
              {delivery>=0?`only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`:"Order should have arrived"}
            </div>
          </div>
        </div>
    )
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;

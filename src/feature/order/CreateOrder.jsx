import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, redirect, useActionData } from "react-router";
import Button from "../../ui/Button";
import { createOrder } from "../../services/apiRestaurant";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  // const dispatch=useDispatch();

  const formErrors = useActionData();

  return (
    <div className="py-6 px-4">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let`&apos;s go! {username}
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center   ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2  text-xs font-semibold text-red-700 bg-red-100 p-2 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className=" relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full "
            />
          </div>
          {/* <div className="absolute right-0.5 top-0.5">
           {!position.latitude&& !position.longitute?  <Button disabled={isLoadingAddress} type="small"  onClick={(e)=>{
              e.preventDefault();
              dispatch(fetchAddress())
            }}>get position</Button>:null}
          </div> */}
        </div>

        <div className="mb-12 flex items-center gap-5 ">
          <input
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to you give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" />
          <Button type="primary">order now</Button>

          {/* <button
               disabled={isSubmiting}
               className="uppercase py-3 px-4 rounded-full bg-yellow-400 tracking-wide inline-block font-semibold text-stone-800 hover:bg-yellow-300 
           transition-colors duration-1000
           focus:outline-none  focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
           >
               {isSubmiting? "placing order..." : "order now"}
               </button> */}
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone =
      "please give us your correct phone number.we might need it to contact you...";
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  console.log(newOrder);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

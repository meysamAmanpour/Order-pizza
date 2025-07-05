import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./feature/menu/Menu";
import { loader as menuLoader } from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./feature/order/CreateOrder";
// import CreateOrder from "./feature/order/CreateOrder";
import Order from "./feature/order/Order";
import { loader as orderLoader } from "./feature/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

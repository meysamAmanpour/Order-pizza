import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import CartOverview from "../feature/cart/CartOverview";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function AppLayout() {
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll ">
        <main className="mx-auto max-w-4xl ">
          <Outlet />
        </main>
      </div>
      {cart.length > 0 && <CartOverview />}
    </div>
  );
}

export default AppLayout;

import { Link } from "react-router";
import Username from "../feature/user/UserName";
import { useSelector } from "react-redux";
import SearchOrder from "../feature/order/SearchOrder";

function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex items-center justify-between  bg-blue-200 py-4 px-3 border-b border-stone-400 ">
      <Link to="/">
        <h2 className="text-lg font-medium transition-all duration-200 hover:font-semibold ">
          pizza fast food
        </h2>
      </Link>
      <SearchOrder />
      {username && <Username />}
    </header>
  );
}

export default Header;

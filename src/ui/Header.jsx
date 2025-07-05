import { Link } from "react-router";
import Username from "../feature/user/UserName";
import { useSelector } from "react-redux";

function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex items-center justify-between  bg-blue-200 py-4 px-3 border-b border-stone-400 ">
      <Link to="/">
        <h2>pizza fast food</h2>
      </Link>
      <input
        className="input focus:w-44
            sm:focus:w-72
             "
        type="text"
        placeholder="search Order..."
      />
      {username && <Username />}
    </header>
  );
}

export default Header;

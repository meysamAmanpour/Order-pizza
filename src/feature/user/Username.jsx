import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  return <div className=" text-lg hidden md:inline">{username}</div>;
}

export default Username;

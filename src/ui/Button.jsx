import { Link } from "react-router";

function Button({ children, type, to, onClick }) {
  const base =
    "bg-blue-400 px-3 py-2 rounded-full font-semibold hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500/50 focus:ring-offset-2";

  const styles = {
    primary: base + "text-xl",
    small: base + "text-md",
    secondary:
      "bg-stone-300 px-3 py-2 text-md font-semibold rounded-full focus:outline-none hover:bg-stone-400 hover:bg-stone-400  focus:ring focus:ring-stone-500/50 focus:ring-offset-2",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

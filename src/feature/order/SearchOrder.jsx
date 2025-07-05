import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [searchOrder, setSearchOrder] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchOrder) return;
    navigate(`/order/${searchOrder}`);
    setSearchOrder("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input focus:w-44
            sm:focus:w-80
             "
        type="text"
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
        placeholder="search Order..."
      />
    </form>
  );
}

export default SearchOrder;

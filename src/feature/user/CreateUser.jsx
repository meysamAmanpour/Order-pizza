import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center space-y-4">
        <p className=" mt-8  text-lg font-semibold ">
          👋 Welcome! Please start by telling us your name:
        </p>
        <input
          className="input w-80"
          type="text"
          placeholder="your full name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="primary">start ordering</Button>
      </div>
    </form>
  );
}

export default CreateUser;

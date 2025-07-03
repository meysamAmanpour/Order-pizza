import { useSelector } from "react-redux";

function Username() {
    const username=useSelector(state=>state.user.username)
    return (
        <div className="hidden sm:inline">
            {username}
        </div>
    )
}

export default Username;

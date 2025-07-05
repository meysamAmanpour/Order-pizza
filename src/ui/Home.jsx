import CreateUser from "../feature/user/CreateUser";
import Button from "./Button";
function Home() {
  return (
    <div className="flex flex-col items-center mt-16   space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl font-semibold ">The best pizza.</p>
        <p className="text-2xl font-semibold text-blue-600">
          Straight out of the oven, straight to you.
        </p>
      </div>
      <CreateUser />
    </div>
  );
}

export default Home;

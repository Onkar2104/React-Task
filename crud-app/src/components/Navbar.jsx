import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ loggedInUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="h-20 p-3 bg-white flex items-center justify-between border-b-3 border-x-2 rounded-xl border-solid border-black ">
      <h1 className="font-semibold font-serif text-xl">CRUD App</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {loggedInUser ? (
          <>
            {/* <span className="underline font-bold text-lg"></span> */}
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Home Page</h1>

        <h3>Welcome {user.name}</h3>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
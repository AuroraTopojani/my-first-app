import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <nav>
      <Link to="/">
        <button>HOME PAGE</button>
      </Link>
      <br />
      <button onClick={goToAbout}>ABOUT PAGE</button>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function ProductNavBar() {
  return (
    <nav>
      <Link to="/product/1">PRODUCT 1</Link>
      <br />
      <Link to="/product/2">PRODUCT 2</Link>
    </nav>
  );
}

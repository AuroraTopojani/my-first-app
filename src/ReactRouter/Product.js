import { useParams } from "react-router-dom";
import ProductNavBar from "./ProductNavBar";
export default function Product() {
  const { id } = useParams();
  return (
    <div>
      <ProductNavBar />
      <h2>THIS IS PRODUCT PAGE</h2>
      <p>THE PRODUCT ID IS {id}</p>
    </div>
  );
}

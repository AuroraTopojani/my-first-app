import logoReact from "../assests/react-core-concepts.png";
import Button from "../Button/Button";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <img src={logoReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {1 + 1} React concepts you will need for almost any app you are going to
        build!
      </p>
      <Button />
    </header>
  );
}

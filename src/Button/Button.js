import styles from "./Button.module.css";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  font-size: 30px;
  padding: 10px;
`;
const Description = styled.p`
  color: orange;
  font-size: 15px;
  padding: 10px;
`;
export default function Button() {
  return (
    <div>
      <Title>A JE MIRE</Title>
      <button className={styles.button}>PERSHENDETJE</button>
      <Description>MIRE TI A JE MIRE</Description>
      <button className={styles.button} style={{ color: "black" }}>
        DITEN E MIRE
      </button>
      <Description>nope</Description>
    </div>
  );
}

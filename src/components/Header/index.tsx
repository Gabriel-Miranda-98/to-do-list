import styled from "./header.module.css";
import ImgLogo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styled.container}>
      <img src={ImgLogo} alt="Logo do projeto to do list" />
    </header>
  );
}

import "./UpperPart.css";
import logo from "../assets/images/ironhack-logo-xs.png";
import menu from "../assets/images/menu-top-xs.png";

function UpperPart() {
  return (
    <div className="upper-container">
      <header>
        <img src={logo} alt="Logo" />
        <img src={menu} alt="Menu" className="logo-iron" />
      </header>
      <h1 className="title">Say hello to ReactJS</h1>
      <h3 className="subtitle">
        You will learn how to use <br /> the most popular frontend library, and
        become a super Ninja developer.
      </h3>
      <button className="button">Awsome!</button>
    </div>
  );
}

export default UpperPart;

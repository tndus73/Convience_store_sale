import { MdStore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import cu_logo from "../img/cu_logo.jpg";
import gs_logo from "../img/GS25_logo.jpg";
import mini_logo from "../img/mini_logo.png";
import seven_logo from "../img/seven_logo.png";
import emart_logo from "../img/emart_logo.png";
import "./Header.scss";

const logos = [
  {
    name: "all",
    img: <MdStore />,
  },
  {
    name: "cu",
    img: cu_logo,
  },
  {
    name: "gs",
    img: gs_logo,
  },
  {
    name: "mini",
    img: mini_logo,
  },
  {
    name: "seven",
    img: seven_logo,
  },
  {
    name: "emart",
    img: emart_logo,
  },
];

const Header = () => {
  return (
    <div className="header">
      {logos.map((logo) => (
        <NavLink
          className="comp"
          key={logo.name}
          to={logo.name === "all" ? "/" : `/${logo.name}`}
          // exact={logo.name === "all"}
        >
          {logo.name === "all" ? (
            <MdStore className="all" />
          ) : (
            <img src={logo.img} alt={logo.name}></img>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;

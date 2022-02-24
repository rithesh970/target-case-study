import { Fragment } from "react";
import logo from "../../assets/logo.svg";
import metroImage from "../../assets/nextrip.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="d-flex justify-content-center align-items-center border p-3">
        <img alt="metro transit home" src={logo} className="d-inline-block" />
      </header>
      <div className="main-image">
        <img alt="" src={metroImage} />
      </div>
    </Fragment>
  );
};

export default Header;

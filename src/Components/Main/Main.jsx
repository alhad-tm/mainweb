import React from "react";
import css from "./Main.module.css";
import Logo from "../../assets/Logo.svg";
import Invic2 from "../../assets/INVICIOUS2.svg";

const Main = () => {
  return (
    <div className={css.container} id="home">
      <div className={css.div1}>
        <img src={Logo} alt="" />
      </div>

      <div className={css.div2}>
        <img src={Invic2} alt="" />
      </div>

      <div className={css.div3}>
        <span>
          Invicious is committed to creating innovative solutions that redefine
          the digital landscape. <br />Want to learn more about our innovative
          products?
        </span>
      </div>
    </div>
  );
};

export default Main;

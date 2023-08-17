import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Logo.svg"
import Invic from "../../assets/INVICIOUS.svg"
import Bars from "../../assets/bars.svg"
// import { Link } from 'react-scroll'
import Close from "../../assets/close.png"
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={css.container} >
     
      <div className={css.left}>
       <img className={css.logo} src={Logo} alt="" />
       <img className={css.invic} src={Invic} alt="" />
        
      </div>


      <div className={css.right}>
    
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src={Bars}
            alt=""
           
          />
        </div>
      ) : (
        <ul className={css.ulist} onClick={()=>setMenuOpened(false)}>
          {mobile? <div className={css.main}>
            <div className={css.m1}> <img className={css.logo} src={Logo} alt="" /> <img src={Invic} alt="" />  </div>
            <div className={css.m2}> <img src={Close} alt="" /></div>
             </div>:""}
            
            {/* <li> <Link onClick={() => setMenuOpened(!menuOpened)} to="home" spy={true} smooth={true}> Home  </Link> </li> */}
            <li> <HashLink  to="/#home" onClick={() => setMenuOpened(!menuOpened)}  spy={true} smooth={true}> Home  </HashLink> </li>
            <li> <HashLink to="/#about" onClick={() => setMenuOpened(false)}  spy={true} smooth={true}> About  </HashLink> </li>
            <li onClick={() => setMenuOpened(false)}> <HashLink to="/#products" onClick={() => setMenuOpened(false)}  spy={true} smooth={true}> Products & Services </HashLink> </li>
            {/* <li> <Link to="home" spy={true} smooth={true}> Service  </Link> </li> */}
            <li> <HashLink onClick={() => setMenuOpened(false)} to="/#contact" spy={true} smooth={true}> Contact </HashLink> </li>
        
        </ul> ) }
        
      </div>
    </div>
  )
}

export default Header

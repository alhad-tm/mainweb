import React from 'react'
import css from "./Footer.module.css"
import Logo from "../../assets/Logo.svg"
import Twitter from "../../assets/Twitter.svg"
import Lk from "../../assets/linkedin2.svg"
import Insta from "../../assets/instagram logo.svg"
import Location from "../../assets/Location.svg"
import Phone from "../../assets/Phone.svg"
import Mail from "../../assets/Mail.svg"
import { Link } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'


const Footer = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>

        <div className={css.top}>
            <img src={Logo} alt="" />
        </div>

        <div className={css.middle}>

            <div className={css.m1}>
                <span>Invicious is committed to creating innovative solutions that redefine the digital landscape. 
Join us on our mission to make a positive impact and build a brighter tomorrow.</span>
            <div className={css.icons}>
                {/* <img src={Twitter} alt="" />
                <img src={Fb} alt="" />
                <img src={Insta} alt="" /> */}
                <a href="https://twitter.com/Invicious_in?s=08" target="_blank" rel="noopener noreferrer">  <img src={Twitter} alt="" />    </a>   
                <a href="https://www.linkedin.com/company/invicious" target="_blank" rel="noopener noreferrer">  <img src={Lk} alt="" /> </a>  
            <a href="https://instagram.com/invicious.in?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">  <img src={Insta} alt="" /></a> 
            </div>
            </div>
<div className={css.wrap}>
            <div className={css.m2}>
                <span>Products & Services</span>
               
                <a href="https://invcs.in/" target="_blank" rel="noopener noreferrer">   <span>Invicious Consultancy Service</span></a>
                <a href="https://batcave.co.in/" target="_blank" rel="noopener noreferrer">  <span>Batcave</span></a>
              
                <span>Tributors</span>
                <span>Green Castle</span>
            </div>

            <div className={css.m3}>
                <span>Important links</span>

                <span>Organization Team</span>
                <span>Our partners</span>
                <span>Cookies Policy</span>
              <LinkR to="/career">  <span onClick={()=>window.scrollTo(0,0)}>Careers</span> </LinkR>  
            </div> </div>

            <div className={css.m4}>
                <span>Contact info</span>
                <div className={css.mset}>
                    <img src={Location} alt="" />
                    <span>124-H, 3rd Floor, Thendral Complex,
DB Road, RS Puram, Coimbatore - 641002</span>
                </div>

                <div className={css.mset}>
                    <img src={Phone} alt="" />
                    <span>+91 7550315660</span>
                </div>
                <div className={css.mset}>
                    <img src={Mail} alt="" />
                    <a href="mailto: contact@invicious.in"> <span className={css.aspan} >contact@invicious.in</span> </a>  
                </div>


            </div>



            
        </div>
       
       <div className={css.hrdiv}>  </div>
      
      


       <div className={css.bottom}>
        {/* <div className={css.bleft}> */}
        <ul className={css.flist}>

<li> <Link to="home" spy={true} smooth={true}> Home  </Link> </li>
            <li> <Link to="about" spy={true} smooth={true}> About  </Link> </li>
        <li> <Link to="contact" spy={true} smooth={true}> Contact </Link> </li> 
            <li onClick={() => window.scrollTo(0, 0)}><LinkR to="/privacy"> Privacy Policy </LinkR> </li>
        {mobile?  <li onClick={() => window.scrollTo(0, 0)} className={css.alink}> <LinkR to="/terms">T & C </LinkR></li> : <li onClick={() => window.scrollTo(0, 0)}> <LinkR to="/terms">Terms & Conditions </LinkR></li> }   
        </ul>
        {/* </div> */}

        <div className={css.bright}> 
            <span>Copyright © 2023 Invicious</span>
        </div>
       
       </div>
      
      
    </div>
  )
}

export default Footer

import React from 'react'
import css from "./ProductsandServices.module.css"
import Inv from "../../assets/tech-consultancy.svg"
// import Batcave from "../../assets/btv.svg"
// import Batcave from "../../assets/batcavenew.svg"


import Batcave from "../../assets/batcave-k.svg" 
import Trib from "../../assets/tclogonew.png"

import IT1 from "../../assets/itservice.svg"
import IT2 from "../../assets/itconsultancy.svg"
import IT3 from "../../assets/it.svg"
import Green from "../../assets/Green castel logo.svg"

import Carrow from "../../assets/curvearrow.svg"

const ProductsandServices = () => {
  return (
    <div className={css.container} id="products">
        <div className={css.div1}>
            <span>PRODUCTS & SERVICES

            </span>
        </div>

        <div className={css.div2}>
            <div className={css.products}>
                <div className={css.test}>
                    <span>Invicious Tech Consultancy:
                        Levering three years of expertise, we empower
                        businesses with cutting-edge IT solutionsand expert guidance for
                         seamless growth and innovation
                    </span>
                </div>
            <img className={css.imgs} src={Inv} alt="" />
            <span>Invicious</span>
            </div>

            <div className={css.products}>
            <div className={css.test}>
                    <span>A heaven for car enthusiasts with car meets, a car mall,
                        a drag race track,exclusive membership perks,and expansion plans,plus
                        a dedicated community app.
                    </span>
                </div>
            <img className={css.btv} src={Batcave} alt="" />
            <span>Batcave</span>
            </div>
            <div className={css.products}> 
            <div className={css.test}>
                <span>Our film industry software solutions,including a movie ticket
                    booking app,revolutionized distribution to management,
                    making it more faster and more efficient.
                </span>
            </div>
            <img className={css.imgs}  src={Trib} alt="" />
            <span>Tributor</span>
            </div>
            <div className={css.products}>
                <div className={css.test}>
                    <span>
                    The Green Castle Construction Company,with 17 years of expertise,delivers
                    cutting-edge,eco-construction solution for a greenr future.Empowering clients
                    with modern and innovative construction process.
                    </span>
                </div>
                <img className={css.imgs} src={Green} alt="" />
                <span>Green Castle</span>
            </div>
         
        </div>

        <div className={css.div3}>
            <div className={css.services}>
                <img src={IT1} alt="" />
                <span>IT Services</span>
            </div>
            <div> <img className={css.carrow} src={Carrow} alt="" /></div>
            <div className={css.services}>
                <img src={IT2} alt="" />
                <span>IT Consultancy</span>
            </div>
            <div> <img className={css.carrow} src={Carrow} alt="" /></div>
            <div className={css.services}>
                <img src={IT3} alt="" />
                <span>Digital Branding</span>
            </div>
           
        </div>
      
    </div>
  )
}

export default ProductsandServices

import React from 'react'
import css from "./Careers.module.css"
import Location from "../../assets/Location.svg"

const Careers = () => {
    // const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Career</span>
            <span>“Invicious Metacorp Private Limited”</span>
            <span>Join our team of innovators and change-makers! <br />
              Check out our current job openings and start your journey towards a rewarding career with us.</span>
        </div>
        

        <div className={css.div2}>
            <span>Workculture</span>

            <span>
            At Invicious, we foster a dynamic and <span className={css.spaninside}> agile work culture </span>  that promotes collaboration, creativity and innovation. We believe that our success is built on the <span className={css.spaninside}> strength of our workforce </span> . We strive to create an environment where everyone can <span className={css.spaninside}>  thrive and grow. </span>  <br /> <br />

We <span className={css.spaninside}> encourage our teammates </span> to share their insights and perspectives freely, and promote a work <span className={css.spaninside}>  environment that best suits their preferences. </span> We priorities personal and professional growth and development, providing opportunities to take ownership of their career paths and to <span className={css.spaninside}>  pursue their passions within our organization. </span>  
            </span>
        </div>


        <div className={css.div3}>

            <div className={css.div3span1}>
                <span>Job Opportunities</span>
            </div>
               {/* absolute */}
               <div className={css.noopening}>
                <span>Currently no openings available</span>
            </div>

            <div className={css.boxset}>
       
        
                      <div className={css.box}>
                    <div className={css.b1}>
                        <button className={css.fulltime}>Full time</button>
                        <span>11 hours ago</span>
                    </div>

                    <div className={css.b2}>
                        <span>Senior UI/UX Designer</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore 
                             vitae architecto obcaecati quo dolor delectus dignissimos?</span>
                             <div className={css.hrdiv}></div>
                    </div>

                    <div className={css.b3}>
                        <div className={css.b3left}>
                            <img src={Location} alt="" />
                            <span>Coimbatore</span>
                        </div>
                        <div className={css.b3right}> <button className={css.applynow}>Apply now</button></div>
                    </div>
                </div>
                <div className={css.box}>
                    <div className={css.b1}>
                        <button className={css.fulltime}>Full time</button>
                        <span>11 hours ago</span>
                    </div>

                    <div className={css.b2}>
                        <span>Full Stack Developer</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore 
                             vitae architecto obcaecati quo dolor delectus dignissimos?</span>
                             <div className={css.hrdiv}></div>
                    </div>

                    <div className={css.b3}>
                        <div className={css.b3left}>
                            <img src={Location} alt="" />
                            <span>Coimbatore</span>
                        </div>
                        <div className={css.b3right}> <button className={css.applynow}>Apply now</button></div>
                    </div>
                </div>
                <div className={css.box}>
                    <div className={css.b1}>
                        <button className={css.fulltime}>Full time</button>
                        <span>11 hours ago</span>
                    </div>

                    <div className={css.b2}>
                        <span>UI Developer</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore 
                             vitae architecto obcaecati quo dolor delectus dignissimos?</span>
                             <div className={css.hrdiv}></div>
                    </div>

                    <div className={css.b3}>
                        <div className={css.b3left}>
                            <img src={Location} alt="" />
                            <span>Coimbatore</span>
                        </div>
                        <div className={css.b3right}> <button className={css.applynow}>Apply now</button></div>
                    </div>
                </div> 


            </div>

        </div>

        <div className={css.div4}>
            <div className={css.lastbox}>
                <span>No suitable job opening found? Don't worry! We're always looking for passionate and talented individuals to join our team.
                     Send us your resume and tell us why you'd be a great fit. Let's build a better future together!</span>
                     <div className={css.mail}>
                        <a href="mailto: career@invicious.in"> <span>career@invicious.in</span> </a>  
                     </div>
            </div>
        </div>
      
    </div>
  )
}

export default Careers

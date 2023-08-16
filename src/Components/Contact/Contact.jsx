import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import css from "./Contact.module.css"
import Location from "../../assets/map-marker 1.svg"
import Phone from "../../assets/Phone.svg"
import Mail from "../../assets/Mail.svg"
import Twitter from "../../assets/Twitter.svg"
import Lk from "../../assets/linkedin2.svg"
import Insta from "../../assets/instagram logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [mail, setMail] = useState('')
  const[subject,setSubject]=useState("")
    const notify = () => toast.success("Sent Successfully");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_uwefeop", 
        "template_9a4zv6d",
        form.current,
        "0ShbDNI1kk0Ln2HD"
        )  
        .then(
          (result) => { 
            console.log(result.text);
          },
          (error) => {
            console.log(error.text); 
          }
        );
    };
  return (
    <div className={css.container} id="contact">

        <div className={css.div1}>
            <span>CONTACT US!</span>
        </div>

        <div className={css.div2}>

<div className={css.div2left}>
    <span>From Concept to Reality <br />
Let’s make it happen</span>

<div className={css.set}>
    <img src={Location} alt="" />
    <span className={css.sp}>124-H, 3rd Floor, Thendral Complex, <br />
DB Road, RS Puram, Coimbatore - 641002</span>
</div>
    
    <div className={css.set}> 
    <img src={Phone} alt="" /> 
    <span>+91 7550315660</span>
    </div>

    <div className={css.set}> 
    <img src={Mail} alt="" /> 
    <a href="mailto: contact@invicious.in"> <span className={css.aspan} >contact@invicious.in</span> </a>  
    </div>
    <div className={css.socialiconsnew}>
    <a href="https://twitter.com/Invicious_in?s=08" target="_blank" rel="noopener noreferrer">  <img src={Twitter} alt="" />    </a>   
    <a href="https://www.linkedin.com/company/invicious" target="_blank" rel="noopener noreferrer" >   <img src={Lk} alt="" /> </a>  
            <a href="https://instagram.com/invicious.in?igshid=MzRlODBiNWFlZA=="  target="_blank" rel="noopener noreferrer">  <img src={Insta} alt="" /></a> 
    </div>
   
</div>



<div className={css.div2right}>
    <div className={css.box}> 
     <span>Sent us a message</span>

     <form className={css.contactform}   ref={form}
          onSubmit={sendEmail} action="">
        <input onChange={(e) => setFirstName(e.target.value)} className={css.inp} type="text" required name="to_name" id="" placeholder='Name' />
        <input onChange={(e) => setMail(e.target.value)} className={css.inp} type="email" required name="user_email" id="" placeholder='Mail' />
        <input onChange={(e) => setSubject(e.target.value)} className={css.inp} type="text" required name="subject" id="" placeholder='Subject' />
        <input className={css.inp} type="text" name="message" id="" placeholder='Message(Optional)' />
        <button onClick={notify}  className={css.sentbtn}>Send</button>
      
        {firstName.length>1 && mail.length>1 && subject.length>1 ? <ToastContainer style={{width:"257px", height:"50px"}} autoClose={600} position={"bottom-center"} /> : ""}
     </form>
    </div>
</div>


        </div>
      
    </div>
  ) 
}

export default Contact

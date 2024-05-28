
import { RiMailSendLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer=()=>{

return(<>

<div className="text-xl text-white  bg-black ">

<div className="flex justify-around align-middle p-10 text-2xl">
<div className=""> <RiMailSendLine /> Connected With Our Email Updates
</div>
<div className=""><span className=""> <input className=" p-4"placeholder="send your email"/>
<button className=" bg-white p-5 absolute border-l-2 text-black rounded-e"><IoIosSend /></button> 
</span>
<p><input type="checkbox" /> I agree to the terms and conditions and the privacy policy</p></div>
<div className="">
<ul className=" flex gap-7 ">
    <li className=""><FaFacebookSquare /></li>
    <li><FaLinkedin /></li>
    <li className=""><FaSquareXTwitter /></li>
    <li className=""><FaYoutube /></li>
</ul>
 </div>
</div>
    <div>
      <div className="flex justify-around p-5  gap-8">
        <ul>
          <li className="font-bold">CATEGORIES</li>
          <li>Computer</li>
          <li>Mobile</li>
        </ul>
        <ul>
          <li className="font-bold">QUICK LINKS</li>
          <li> Shop &amp; Collect</li>
          <li> About Us</li>
          <li>Press Release</li>
          <li>Corporate Policies</li>
        </ul>
        <ul>
          <li className="font-bold">CUSTOMER SERVICE</li>
          <li> Help &amp; FAQs</li>
          <li>Cancellation &amp; Refunds</li>
          <li>Privacy Policy</li>
          <li> Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
<div className="text-center">
© Akshaylowanshi. All Rights Reserved. Website Designed & Developed by Web Biz  <br/>

Privacy Policy | Terms & Conditions | FAQ</div>



</div>
</>)

}


export default Footer;
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";  
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex md:justify-evenly items-center p-6 border-t md:mt-[-60px] mt-[-30px] flex-col gap-4 md:flex-row ">
      <div>
        <h1 className="font-extrabold text-lg">Phone</h1>
        <p>123-456-789</p>
      </div>
      <div>
        <h1 className="font-extrabold text-lg">Email</h1>
        <p>Email@.com</p>
      </div>
      <div>
        <h1 className="font-extrabold text-lg">follow me</h1>
        <ul className="flex gap-4 justify-center">
          <li><IoLogoTwitter /></li>
          <li><FaLinkedinIn /></li>
          <li><FaGithub /></li>
        </ul>
      </div>
      <div>
        <p>© 2035 By Nicol Rider.</p>
        <p>Powered and secured by Wix</p>
      </div>        
    </div>
  )
}

export default Footer

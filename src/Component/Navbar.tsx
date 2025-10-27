import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react"; // 1. Import useState

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Nav flex justify-between items-center m-1  p-6 h-16 text-sm font-light">
     
      <div className="sec1 flex gap-4 items-center tracking-wider">
        <div>
          <Link to="/" className="flex gap-2 items-center">
            <div className="bg-orange-300 h-[20px] w-[20px] rounded-2xl"></div>
            <h1 className="md:text-lg text-sm font-extrabold"> Nicol Rider </h1>
          </Link>
        </div>
        <p className="md:text-lg text-sm font-light">Editor</p>
      </div>

      <div
        className={`sec2 absolute md:static md:min-h-fit md:w-auto 
                   bg-[#f3f3f3] min-h-[60vh] left-0 ${
                     isMenuOpen ? "top-16" : "top-[-100%]"
                   }
                   gap-4 w-full flex items-center px-5
                   transition-all duration-300 ease-in-out`}
      >
        <ul className="flex md:gap-[2vh] md:flex-row md:items-center flex-col gap-6 w-full tracking-wider">
          <li>
            <Link to="/resume" onClick={toggleMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu} className="border-x p-2">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>
              Project
            </Link>
          </li>
        </ul>
      </div>

      {/* 5. Toggle Icons (Moved OUTSIDE sec2) */}
      <div className="flex items-center md:hidden">
        {isMenuOpen ? (
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FaBarsStaggered
            size={25}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
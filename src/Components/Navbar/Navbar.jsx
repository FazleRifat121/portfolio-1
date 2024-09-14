import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [slider, setSlider] = useState(true);
  const navlinks = (
    <>
      <li className=" text-md md:text-xl font-bold">
        <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
      </li>
      <li className="md:text-xl font-bold">
        <Link to="/skills" spy={true} smooth={true} offset={-100} duration={500}>
        Skills
        </Link>
      </li>
      <li className="md:text-xl font-bold">
        <Link to="/projects" spy={true} smooth={true} offset={-100} duration={500}>
          Projects
        </Link>
      </li>
      <li className="md:text-xl font-bold">
        <Link to="/contact" spy={true} smooth={true} offset={-100} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mt-5">
        <div className="navbar-start">
          <div className="dropdown md:hidden " onClick={() => setSlider(!slider)}>
            {slider ? (
              <HiOutlineBars4 className="text-4xl font-bold mr-4"></HiOutlineBars4>
            ) : (
              <AiOutlineClose className="text-4xl font-bold mr-4"></AiOutlineClose>
            )}
            <ul
              className={`absolute top-12 ${slider?"hidden":''} left-0 z-10 shadow bg-base-200 rounded-box w-32`}
            >
              {navlinks}
            </ul>
          </div>
          <a className="normal-case text-xl md:text-3xl font-bold " href="/">Fazle Rifat</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

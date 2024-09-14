import { ImLocation } from "react-icons/im";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
const Contact = () => {
  return (
    <div id="/contact">
      <div className="max-w-max mx-auto">
        <h3 className=" text-center text-5xl my-7 md:text-6xl font-semibold ">
          Contact
        </h3>
        <div className="flex items-center gap-1 w-80 p-6 border">
          <ImLocation className="text-3xl"></ImLocation>{" "}
          Birampur,Dinajpur,Bangladesh
        </div>
        <div className=" w-80 p-6 border">
          <a href="https://www.facebook.com/fazle.rifat.5">
            <div className="flex items-center gap-1">
              <BsFacebook className="text-3xl"></BsFacebook> Facebook
            </div>
          </a>

          <a href="https://www.linkedin.com/in/fazle-rifat-67945b286/">
          <div className="flex items-center gap-1 mt-5">
            <AiFillLinkedin className="text-3xl"></AiFillLinkedin> Linkedin
          </div>
          </a>
          <a href="https://www.upwork.com/freelancers/~01addf133bff6f6515">
          <div className="flex items-center gap-1 mt-5">
            <BiLogoUpwork className="text-3xl"></BiLogoUpwork> Upwork
          </div>
          </a>
        </div>
        <div className="flex items-center gap-1 w-80 p-6 border">
          <AiOutlineMail className="text-3xl"></AiOutlineMail>{" "}
          fazlerifatofficial@gmail.com
        </div>
        <div className="flex items-center gap-1 w-80 p-6 border">
          <BsFillTelephoneFill className="text-3xl"></BsFillTelephoneFill>{" "}
          +8801756542911
        </div>
      </div>
    </div>
  );
};

export default Contact;

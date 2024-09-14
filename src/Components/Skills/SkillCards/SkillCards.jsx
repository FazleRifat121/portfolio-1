import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {DiJavascript} from "react-icons/di";
import {DiReact} from "react-icons/di";
import {BiLogoTailwindCss} from "react-icons/bi";
const SkillCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 my-5">
      <div className="card max-w-[15rem] h-[13rem] p-5 rounded-box border bg-base-200 shadow-xl mx-auto md:mx-0">
        <figure>
          <p><AiFillHtml5 className="text-9xl"></AiFillHtml5></p>
        </figure>
        <div>
          <h2 className=" text-center text-4xl font-bold" >
            HTML
          </h2>
        </div>
      </div>
      <div className="card max-w-[15rem] h-[13rem] p-5 rounded-box border bg-base-200 shadow-xl mx-auto md:mx-0">
        <figure>
          <p><DiCss3 className="text-9xl"></DiCss3></p>
        </figure>
        <div>
          <h2 className=" text-center text-4xl font-bold" >
            CSS
          </h2>
        </div>
      </div>
      <div className="card max-w-[15rem] h-[13rem] p-5 rounded-box border bg-base-200 shadow-xl mx-auto md:mx-0">
        <figure>
          <p><BiLogoTailwindCss className="text-9xl"></BiLogoTailwindCss></p>
        </figure>
        <div>
          <h2 className=" text-center text-4xl font-bold" >
            TW
          </h2>
        </div>
      </div>
      <div className="card max-w-[15rem] h-[13rem] p-5 rounded-box border bg-base-200 shadow-xl mx-auto md:mx-0">
        <figure>
          <p><DiJavascript className="text-9xl"></DiJavascript></p>
        </figure>
        <div>
          <h2 className=" text-center text-4xl font-bold" >
            JS
          </h2>
        </div>
      </div>
      <div className="card max-w-[15rem] h-[13rem] p-5 rounded-box border bg-base-200 shadow-xl mx-auto md:mx-0">
        <figure>
          <p><DiReact className="text-9xl"></DiReact></p>
        </figure>
        <div>
          <h2 className=" text-center text-4xl font-bold" >
            React
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;

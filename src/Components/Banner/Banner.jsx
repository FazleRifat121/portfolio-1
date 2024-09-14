import img from "../../assets/images/my photo.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-xs md:max-w-xl" />
          <div className="ml-4">
            <h1 className="text-5xl font-bold">Fazle Rifat</h1>
            <h2 className="text-2xl font-bold">Front-End Web Developer</h2>
            <p className="py-6">
              Welcome to my digital space! I am Fazle Rifat, a passionate
              front-end web developer dedicated to creating visually appealing
              and user-friendly websites. With a strong foundation in HTML, CSS,
              and JavaScript, I transform ideas into interactive digital
              experiences. Explore my portfolio and witness the fusion of
              creativity and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

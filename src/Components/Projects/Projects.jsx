import ProjectsCards from "./ProjectsCards";

const Projects = () => {
  return (
    <div className="lg:h-[50vh]">
      <div id="/projects">
        <h3 className=" text-center text-5xl my-7 md:text-6xl font-semibold">
          Projects
        </h3>
        <div className="mt-10 ">
          <ProjectsCards></ProjectsCards>
        </div>
      </div>
    </div>
  );
};

export default Projects;

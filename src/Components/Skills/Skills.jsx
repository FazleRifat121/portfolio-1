import SkillCards from "./SkillCards/SkillCards";


const Skills = () => {
    return (
        <div id="/skills" className="lg:h-[80vh] my-auto">
            <h3 className=" text-center text-5xl my-4 md:text-6xl font-semibold">Skills</h3>
            <div className="mt-10 ">
                <SkillCards></SkillCards>
            </div>
        </div>
    );
};

export default Skills;
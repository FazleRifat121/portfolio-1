import event from '../../assets/images/Education and Training - Google Chrome 10_10_2023 10_08_06 AM.png';
import dragon from '../../assets/images/Dragon News - Google Chrome 10_10_2023 10_08_23 AM.png';
import biker from '../../assets/images/Biker Zone - Google Chrome 10_11_2023 1_02_51 PM.png';



const ProjectsCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-5'>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto ">
        <figure className="px-4 pt-10">
          <img
            src={event}
            alt="Event management"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Event management</h2>
          <div className="card-actions">
          <a href="https://education-training-debbb.web.app/"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto  ">
        <figure className="px-4 pt-10">
          <img
            src={dragon}
            alt="Dragon news"
            className=" rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dragon news</h2>
          <div className="card-actions">
          <a href="https://vermillion-starship-43da0a.netlify.app/"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto ">
        <figure className="px-4 pt-10">
          <img
            src={biker}
            alt="Biker zone"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Biker zone</h2>
          <div className="card-actions">
            <a href="https://fazlerifat.github.io/Biker-Zone/"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;

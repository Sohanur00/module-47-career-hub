/* eslint-disable react/prop-types */


const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                
                <div className="flex">
                    <button className="btn text-[#9873FF]  py-2 font-extrabold border rounded border-[#7E9] mr-4 ">{remote_or_onsite}</button>
                    <button className="btn text-[#9873FF]   py-2 font-extrabold border rounded border-[#7E9] mr-4">{job_type}</button>

                </div>
                <div className="flex">
                    <p>{location}</p>
                    <p>${salary}</p>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
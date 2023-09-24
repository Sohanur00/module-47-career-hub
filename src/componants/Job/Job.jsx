
/* eslint-disable react/prop-types */
import {MdLocationPin } from 'react-icons/md';
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='mt-12' src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                
                <div className="flex">
                    <button className="btn text-[#9873FF]  py-2 font-extrabold border rounded border-[#7E9] mr-4 ">{remote_or_onsite}</button>
                    <button className="btn text-[#9873FF]   py-2 font-extrabold border rounded border-[#7E9] mr-4">{job_type}</button>

                </div>
                <div className="flex gap-5">
               <h2 className='flex items-center'> <MdLocationPin className='text-2xl m-2
               '></MdLocationPin> {location}</h2>
               <h2 className='flex items-center'><AiFillDollarCircle className='text-2xl m-2'></AiFillDollarCircle> {salary}</h2>
                   
                </div>
                <div className="card-actions ">
                   <Link to={`/job/${id}`}>
                   <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
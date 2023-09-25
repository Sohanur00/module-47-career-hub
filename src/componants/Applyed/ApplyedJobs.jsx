/* eslint-disable no-undef */
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const ApplyedJobs = () => {
const jobs = useLoaderData();
useEffect( () =>{

const storedJobIds = storedJobApplication();

if(jobs.length  > 0){
const Jobsapplied = jobs.filter(job => storedJobIds.includes(job.id) )

console.log( jobs,storedJobIds, Jobsapplied)

}


} )

    return (
        <div>
            <h2>Jobs I Applyed</h2>
        </div>
    );
};

export default ApplyedJobs;
import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

const jobs = useLoaderData();
const {id} =  useParams()
const idint = parseInt(id)
const job = jobs.find(job => job.id === idint);
console.log(job);

    return (
        <div >
            <h2 className="text-xl font-medium">Job Details Of  : </h2>
        </div>
    );
};

export default JobDetails;
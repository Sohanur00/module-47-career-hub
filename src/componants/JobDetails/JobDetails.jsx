import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplyCation } from "../../Utily/LocalStorge";

const JobDetails = () => {

const jobs = useLoaderData();
const {id} =  useParams()
const idint = parseInt(id)
const job = jobs.find(job => job.id === idint);
console.log(job);

const handleApplyJob = () =>{
    saveJobApplyCation(id)

toast('you have applyed succesfully')

}

    return (
        <div >
          

<div className="grid  gap-4 md:grid-cols-4">

<div className="border  md:col-span-3">
<h2 className="text-4xl text-center mt-2 font-bold">Details is coming</h2>
<div className="p-5">

<h2 className="text-xl font-medium">Job Details Of  : {job.job_title}</h2>
<p className="font-bold text-xl">{job.company_name}</p>
<p className="mt-4 text-sm mb-4">{job.job_description}</p>
<p className="mt-4 text-sm mb-4">{job.job_responsibility}</p>
<p>{job.educational_requirements}</p>
<p>{job.experiences}</p>

</div>


</div>

<div className="border bg-[#9873FF] p-5 mb-5">
<h3 className="font-bold">Job Details</h3>
<hr />
<p>$ {job.salary}</p>
<p>Job Title :{job.job_title}</p>

<hr />
<h5>Contact Information : {job.contact_information.phone}</h5>
<p>Email : {job.contact_information.email} </p>
<p>Address :{job.contact_information.address}  </p>

<button onClick={handleApplyJob} className="btn btn-success max-w-full mx-auto  ">Apply Now</button>
</div>

<ToastContainer />

</div>


        </div>
    );
};

export default JobDetails;
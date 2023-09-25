// eslint-disable-next-line no-unused-vars
import { json } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import Job from "../componants/Job/Job";

const getJobApplyCation =() =>{

const  storedJobApplication = localStorage.getItem('job-applications')
if(storedJobApplication){
    return JSON.parse(storedJobApplication)
}
return [];


}

const saveJobApplyCation = id =>{
const storedJobApplication = getJobApplyCation();
const exists = storedJobApplication.find(JobId =>JobId === id);
if(!exists){
    storedJobApplication.push(id);
    localStorage.setItem('job-applications',JSON.stringify(storedJobApplication))
}


}

export {saveJobApplyCation}
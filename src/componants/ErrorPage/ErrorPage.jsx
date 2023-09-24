/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" text-center font-extrabold text-5xl text-red-700 mt-40 ">
    
        <span>Error : (●'◡'●) Opps 404  !</span>
       <Link className="btn  btn-success  flex mt-5 m-96 text-white font-semibold" to="/">Go Back</Link>
      </div>
    );
};

export default ErrorPage;
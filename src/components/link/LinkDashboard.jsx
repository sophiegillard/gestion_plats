import {Link} from "react-router-dom";

export const LinkDashboard = ({link, titre}) =>{
    return <>
        <Link to={link}
              className="text-2xl bg-transparent-white p-4 shadow-lg rounded-lg text-white lg:min-w-[20rem] w-full lg:max-w-[40%]
                      hover:bg-transparent-white-hover">
            {titre}
        </Link>
    </>
}
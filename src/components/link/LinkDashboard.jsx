import {Link} from "react-router-dom";

export const LinkDashboard = ({link, titre}) =>{
    return <>
        <Link to={link}
              className="text-2xl bg-transparent-white p-4 shadow-lg rounded-lg text-white
                      hover:bg-transparent-white-hover">
            {titre}
        </Link>
    </>
}
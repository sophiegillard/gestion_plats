import logo from "../../public/assets/logo.png";
import {Link} from "react-router-dom";
import {LinkDashboard} from "../components/link/LinkDashboard";

export const Home = () => {
    return (

    <div className="bg-gradient-to-br from-light-blue to-dark-blue h-screen w-screen flex justify-center items-center">
        <div className="w-[80%] h-3/4 flex flex-col justify-center gap-20">

            <div className="max-w-fit h-fit self-center">
                <img src={logo} alt='logo' className="w-60" />
            </div>

            <div className="flex flex-col text-center gap-6 justify-center items-center">
                <LinkDashboard
                    link={'/GestionDesPlats'}
                    titre={'Gestion des plats'} />
                <LinkDashboard
                    link={'/GestionDesFournisseurs'}
                    titre={'Gestion des fournisseurs'} />
            </div>

        </div>
    </div>

    );
}
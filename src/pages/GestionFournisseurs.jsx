import logo from "../assets/logo.png";
import {LinkDashboard} from "../components/link/LinkDashboard.jsx";

export const GestionFournisseurs = () => {
    return (

        <div className="bg-gradient-to-br from-light-blue to-dark-blue h-screen w-screen flex justify-center items-center">
            <div className="w-[80%] h-3/4 flex flex-col justify-center gap-10">

                <div className="max-w-fit h-fit self-center">
                    <img src={logo} alt='logo' className="w-60" />
                </div>

                <div className="flex flex-col text-center gap-6 justify-center items-center text-white">
                    <p className="text-5xl font-bold tracking-wide">COMING SOON</p>
                    <p className="text-lg">Cette page est en construction. Merci pour votre patience.</p>
                    <LinkDashboard  link={'/'}
                                    titre={"Retour à la page d'acceuil"} />
                </div>

            </div>
        </div>

    );
}
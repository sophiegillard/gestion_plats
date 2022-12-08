import trash from "../../public/assets/delete.png"
import {ConfirmationDeleteModal} from "./ConfirmationDeleteModal";

export const DeleteButton = ({ setDeleteModal }) =>{

    return <>
    <button type="submit" onClick={()=>setDeleteModal(true)}
                    className="bg-red-button rounded-sm shadow-lg text-white px-4 py-2 flex flex-row gap-2 justify-center place-items-center">
                    <span>Supprimer</span>
                    <img src={trash} alt="icon ajouter" className="h-4 w-4"/>
    </button>
    </>
}
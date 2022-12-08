import attention from "../../public/assets/attention.png"
import axios from "axios";
import {useState} from "react";
import {SuccessModal} from "./SuccessModal";
import {deleteDataByID} from "../utils/deleteDataById.js";

export const ConfirmationDeleteModal = ({warning, message, isDeleteModal, setDeleteModal, datas}) =>{

    const [successDeleteModal, setSuccessDeleteModal] = useState(false)

    return <>
        <SuccessModal
            modalState={successDeleteModal}
            action={deleteDataByID({datas})}
            successMessage={'Le plat a été supprimé avec succès.'}/>

        <dialog modal-mode="mini"
                open={isDeleteModal}
                className="shadow-xl backdrop-blur min-w-[30%]">

            <form action="" method="dialog" className="text-font-main flex flex-col justify-center items-center p-8 gap-6">

                <img src={attention} alt="opération réussie image" className="w-24"/>

                <div className="text-center flex flex-col gap-4">
                    <p className="text-3xl font-medium">{warning}</p>
                    <p>{message}</p>
                </div>

                <div className="flex gap-4">
                    <button className="bg-light-grey text-font-main px-4 py-2 rounded-sm shadow-md"
                            onClick={()=>setDeleteModal(false)}>
                        Annuler
                    </button>
                    <button className="bg-red-button text-white px-4 py-2 rounded-sm shadow-md"
                            onClick={() => setSuccessDeleteModal(true)}>
                        Supprimer l'élément
                    </button>
                </div>

            </form>

        </dialog>
    </>
}
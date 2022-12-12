import attention from "../../../public/assets/attention.png"
import {useState} from "react";
import {SuccessModal} from "./SuccessModal.jsx";
import {deleteDataByID} from "../../utils/deleteDataById.js";
import {ActionButton} from "../buttons/ActionButton.jsx";

export const ConfirmationDeleteModal = ({warning, message, isDeleteModal, setDeleteModal, setDatas, pageNumber, setDeleteButton}) =>{

    const [successDeleteModal, setSuccessDeleteModal] = useState(false)

    return <>
        <SuccessModal
            modalState={successDeleteModal}
            action={()=>setSuccessDeleteModal(false)}
            successMessage={'Le plat a été supprimé avec succès.'}/>

        <dialog open={isDeleteModal}
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">

                <form action="src/components/modal/ConfirmationDeleteModal.jsx"
                      onSubmit={(e) => {
                          deleteDataByID({ setDatas, pageNumber }, e);
                          setSuccessDeleteModal(true);
                          setDeleteModal(false)
                          setDeleteButton('hidden')
                      }}
                      method="dialog"
                      className="bg-white text-font-main flex flex-col justify-center items-center p-8 gap-6 mt-28">

                    <img src={attention} alt="opération réussie image" className="w-24"/>


                    <div className="text-center flex flex-col gap-4">
                        <p className="text-3xl font-medium">{warning}</p>
                        <p>{message}</p>
                    </div>


                    <div className="flex gap-4">

                        <ActionButton
                            isIconNeeded={false}
                            onClickAction={()=>setDeleteModal(false)}
                            label={"Annuler"}
                            bgColor={'bg-light-grey text-font-main'} bgColorHover={'bg-light-grey-hover'}
                            />

                        <ActionButton
                            isIconNeeded={false}
                            label={"Supprimer l'élément"}
                            bgColor={'bg-red-button'} bgColorHover={'bg-red-button-hover'}
                            />

                    </div>

                </form>

            </div>

        </dialog>
    </>
}
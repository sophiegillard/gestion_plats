import success from "../../../public/assets/success.png"
import {ActionButton} from "../buttons/ActionButton";

export const SuccessModal = ({modalState, action, successMessage}) => {


    return <>
        <dialog modal-mode="mini"
                open={modalState}
        className="shadow-xl backdrop-blur min-w-[30%] text-font-main
         justify-center items-center p-8 gap-6">

            <form action="src/components/modal/SuccessModal.jsx" method="dialog" className="text-font-main flex flex-col justify-center items-center p-8 gap-6">

                <img src={success} alt="opération réussie image" className="w-24"/>

                <div className="text-center flex flex-col gap-4">
                    <p className="text-3xl font-medium">Opération réussie !</p>
                    <p>{successMessage}</p>
                </div>

                <ActionButton label={'OK'} bgColor={'bg-purple-button'} onClickAction={action}/>

            </form>

        </dialog>
    </>
}
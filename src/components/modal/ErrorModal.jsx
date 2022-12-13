import error from "../../../public/assets/error.png"
import {ActionButton} from "../buttons/ActionButton";

export const ErrorModal = ({modalState, action, errorMessage}) => {


    return <>
        <dialog modal-mode="mini"
                open={modalState}
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">
                <form action="src/components/modal/SuccessModal.jsx"
                      method="dialog"
                      className="bg-white text-font-main flex flex-col justify-center items-center p-8 gap-6 mt-28">

                    <img src={error} alt="opération annulée" className="w-24"/>

                    <div className="text-center flex flex-col gap-4">
                        <p className="text-3xl font-medium">Opération annulée !</p>
                        <p> {errorMessage} </p>
                    </div>

                    <ActionButton label={'OK'}
                                  bgColor={'bg-purple-button'} bgColorHover={'bg-purple-button-hover'}
                                  onClickAction={action}/>

                </form>
            </div>

        </dialog>
    </>
}
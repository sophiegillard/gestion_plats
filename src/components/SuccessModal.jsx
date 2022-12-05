import success from "../../public/assets/success.png"

export const SuccessModal = () => {
    return <>
        <dialog modal-mode="mini"
        className="shadow-xl backdrop-blur min-w-[30%] text-font-main
        flex flex-col justify-center items-center p-8 gap-6">

            <img src={success} alt="opération réussie image" className="w-24"/>
            
            <div className="text-center flex flex-col gap-4">
                <p className="text-3xl font-medium">Opération réussie !</p>
                <p>Le plat a bien été sauvegardée.</p>
            </div>

            <button className="bg-purple-button text-white px-4 py-2 rounded-sm shadow-md">
                OK
            </button>

        </dialog>
    </>
}
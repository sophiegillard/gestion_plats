import close from "../../public/assets/close.png"

export const AjoutPlat = () =>{

    return <>
    <dialog modal-mode="mega"
    className="shadow-xl backdrop-blur p-0 min-w-[50%] text-font-main">
        <form action="" method="dialog" className="">

            <div className="flex justify-between border-b-2 p-4">
                <h3 className="text-xl">Ajout d'un plat</h3>
                <button>
                    <img src={close} alt="close button" className="h-4"/>
                </button>
            </div>

            <div className="px-4 flex flex-col gap-4 my-4">
                <p className="flex flex-col gap-2">
                    <label>Libellé du plat</label>
                        <input type="text" className="border-light-grey border-2 rounded-sm px-3 py-1"></input>
                </p>

                <p className="flex flex-col gap-2">
                    <label>Famille du plat </label>
                        <select className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent">
                            <option value="default">Veuillez selectionner une famille de plat</option>
                            <option>Brine shrimp</option>
                            <option>Red panda</option>
                            <option>Spider monkey</option>
                        </select>
                </p>

                <p className="flex flex-col gap-2">
                    <label>Fournisseur</label>
                            <select className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent">
                                <option value="default">Veuillez selectionner un fournisseur</option>
                                <option>Brine shrimp</option>
                                <option>Red panda</option>
                                <option>Spider monkey</option>
                            </select>
                </p>

                <p className="flex flex-col">
                    <label>Prix </label>
                        <input type="number" min="0" max="100" placeholder="0" 
                        className="w-1/2 border-light-grey border-2 rounded-sm px-3 py-1 text-center"></input>
                </p>
            </div>

            <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                <button type="submit" value="cancel">Annuler</button>
                <button type="submit" className="bg-green-button rounded-sm shadow-lg text-white w-24 p-1">Ajouter</button>
            </div>


        </form>
    </dialog>
    </>
}
import trash from "../../assets/delete.png"

export const DeleteButton = ({ action, showDeleteButton }) =>{

    return <>
    <button type="submit"
            onClick={action}
            className={`${showDeleteButton} bg-red-button hover:bg-red-button-hover rounded-sm shadow-lg text-white px-4 py-2 flex flex-row gap-2 justify-center place-items-center`}>

        <span>Supprimer</span>

        <img src={trash} alt="icon ajouter" className="h-4 w-4"/>

    </button>

    </>
}
import edit from "../../public/assets/edit.png";

export const EditButton = ({setEditModal}, idButton) =>{

    return <>
        <button type="submit"
                id={idButton}
                onClick={()=> setEditModal(true)}
                className="h-5 w-8  bg-light-grey rounded-full">
            <img src={edit} alt="edit button"
                 className="h-4 px-2"/>
        </button>
    </>
}
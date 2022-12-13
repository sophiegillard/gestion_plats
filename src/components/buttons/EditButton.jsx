import edit from "../../../public/assets/edit.png";

export const EditButton = ({onClickAction, idButton}) =>{

    return <>
        <button type="submit"
                id={idButton}
                onClick={onClickAction}
                className="edit-button h-5 w-8  bg-light-grey hover:bg-light-grey-hover rounded-full">

            <img src={edit}
                 alt="edit button"
                 className="h-4 px-2"/>

        </button>
    </>
}
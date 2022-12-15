import close from "../../assets/close.png";

export const CloseButton = ({onClickAction}) =>{

    return <>
        <button type="button">
            <img src={close}
                 alt="close button"
                 className="h-4"
                 onClick={onClickAction}/>
        </button>
    </>
}
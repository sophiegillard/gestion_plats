export const ActionButton = ({ onClickAction, label, image, altImg ,bgColor, bgColorHover, isIconNeeded }) =>{

    return <>
        <button type="submit"
                onClick={onClickAction}
                className={`${bgColor} hover:${bgColorHover} rounded-sm shadow-lg text-white px-4 py-2 flex flex-row gap-2 justify-center place-items-center`}>

            <span>{label}</span>

            {isIconNeeded && <img src={image} alt={altImg} className="h-4 w-4"/>}

        </button>
    </>
}
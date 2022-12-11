
export const PaginationButton = ({name, image, onClickAction, rounded}) =>{
    return <>
        <button
            onClick={onClickAction}
            className={`flex items-center px-2 py-2 h-10 w-9 leading-tight text-gray-500 bg-white border border-gray-300 ${rounded} hover:bg-gray-100 hover:text-gray-700`}>
            <span className="sr-only">{name}</span>
            <img src={image} alt="first page" className="w-5 h-4" />
        </button>
    </>
}
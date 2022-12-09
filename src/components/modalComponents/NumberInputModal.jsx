export const NumberInputModal = ({label, forwardRef, defaultValue}) =>{
    return <>
        <p className="flex flex-col">
            <label>{label}</label>
            <input type="number" min="0" max="100" placeholder="0" ref={forwardRef}
                   defaultValue={defaultValue}
                   className="w-1/2 border-light-grey border-2 rounded-sm px-3 py-1 text-center"></input>
        </p>
    </>
}
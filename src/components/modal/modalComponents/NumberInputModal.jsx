export const NumberInputModal = ({label, forwardRef, value, name, onChangeAction, inputLabel}) =>{
    return <>
        <p className="flex flex-col">
            <label>{label}</label>
            <input type="number"
                   min="0" max="50"
                   placeholder="0"
                   ref={forwardRef}
                   step="any"
                   value={value}
                   name = {name}
                   label={inputLabel}
                   onChange={onChangeAction}
                   className="w-1/2 border-light-grey border-2 rounded-sm px-3 py-1 text-center"></input>
        </p>
    </>
}
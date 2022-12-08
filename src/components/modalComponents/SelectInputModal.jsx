export const SelectInputModal = ({ label, forwardRef, optionText, arrayToDisplay }) =>{
    return <>
        <p className="flex flex-col gap-2">
            <label>{label} </label>
            <select ref={forwardRef} className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent">
                <option value="default">{optionText}</option>
                {arrayToDisplay.map((category)=>
                    <option key={category.nom}>{category.nom}</option>
                )}
            </select>
        </p>
    </>
}
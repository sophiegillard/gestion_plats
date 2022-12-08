export const TextInputModal = ({label, forwardRef}) => {
    return <>

        <p className="flex flex-col gap-2">
            <label>{label}</label>
            <input type="text" ref={forwardRef}
                   className="border-light-grey border-2 rounded-sm px-3 py-1"></input>
        </p>

    </>
}
import {ErrorMessage, Field} from "formik";

export const NumberInputModalFormik = ({label, fieldName, value, onChangeAction}) =>{
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor="dishPrice">{label}</label>
            <Field className="w-1/2 border-light-grey border-2 rounded-sm px-3 py-1 text-center"
                   type="number"
                   min="0"
                   max="50"
                   step="any"
                   name={fieldName}
                   id={fieldName}
                   value={value}
                   onChange={onChangeAction}
            />
            <ErrorMessage className="text-red-500 text-xs" name={fieldName} component="div"/>
        </div>
    )
}
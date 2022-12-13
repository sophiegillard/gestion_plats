import {ErrorMessage, Field} from "formik";

export const TextInputEdit = ({label, fieldName, value, onChangeAction, isEditModal}) =>{
    return (
    <div className="flex flex-col gap-2">
        <label htmlFor="dishName">{label}</label>
        <Field
            className="border-light-grey border-2 rounded-sm px-3 py-1"
            type="text"
            name={fieldName}
            id={fieldName}
            value={value}
            onChange={onChangeAction}/>
        <ErrorMessage
            className="text-red-500 text-xs"
            name={fieldName}
            component="div"/>
    </div>
    )}
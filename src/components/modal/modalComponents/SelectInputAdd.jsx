import {ErrorMessage, Field} from "formik";

export const SelectInputAdd = ({label, defaultOption, arrayToDisplay, fieldName}) =>{
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor="dishProvider">{label}</label>
            <Field className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent" as="select" name={fieldName} id={fieldName}>
                <option value="">{defaultOption}</option>

                {arrayToDisplay.map((item)=>
                    <option key={item.nom} value={item.nom}>{item.nom}</option>
                )}

            </Field>
            <ErrorMessage className="text-orange-700 text-xs" name={fieldName} component="div"/>
        </div>
    )
}
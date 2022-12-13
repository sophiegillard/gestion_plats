import {ErrorMessage, Field} from "formik";

export const SelectInputModalFormik = ({label, defaultOption, arrayToDisplay, fieldName, value, onChangeAction}) =>{
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor="dishProvider">{label}</label>
            <Field
                className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent"
                as="select"
                name={fieldName}
                id={fieldName}
                value={value}
                onChange={onChangeAction}>
                <option value="">{defaultOption}</option>

                {arrayToDisplay.map((item)=>
                    <option key={item.nom} value={item.nom}>{item.nom}</option>
                )}

            </Field>
            <ErrorMessage className="text-red-500 text-xs"
                          name={fieldName}
                          component="div"/>
        </div>
    )
}
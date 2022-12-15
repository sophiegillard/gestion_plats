import axios from "axios";
import * as yup from "yup";
import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik';
import {useEffect, useRef, useState} from "react";
import {fetchDatas} from "../../utils/fetchDatas.js";
import {CloseButton} from "../buttons/CloseButton.jsx";
import {ActionButton} from "../buttons/ActionButton.jsx";
import {SuccessModal} from "./SuccessModal.jsx";
import {updateDish} from "../../utils/updateDish.js";
import {ErrorModal} from "./ErrorModal.jsx";
import {TextInputEdit} from "./EditFormComponent/TextInputEdit.jsx";
import {SelectInputEdit} from "./EditFormComponent/SelectInputEdit.jsx";
import {NumberInputEdit} from "./EditFormComponent/NumberInputEdit.jsx";

export const EditDishModal = ({editModal, setEditModal, theDish, setDatas, datas, pageNumber}) =>{

    const [successUpdateModal, setSuccessUpdateModal] = useState(false)
    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])
    const [showErrorModal, setErrorModal] = useState(false)
    const [showErrorMessageEdit, setErrorMessageEdit ] = useState (false)


    useEffect(() => {
        fetchDatas (setCategories,'/api/category.php');
        fetchDatas (setFournisseurs, '/api/fournisseur.php');
        setEditModal(false)
    }, []);


    const handleSubmitEdit = (e, libellee, categorie, fournisseur, prix) => {
        e.preventDefault();
        const id = theDish.id;
        const updatedDish = {id, libellee, categorie, fournisseur, prix}


        updateDish(setDatas, datas, id, updatedDish)

        axios.put(`/api/index.php/${id}/update`, updatedDish)
            .then(function(response){
                console.log(response)
                const url= `/api/index.php?currentPage=${pageNumber}`
                fetchDatas (setDatas,url);
                setSuccessUpdateModal(true)
                setEditModal(false)
                setErrorMessageEdit(false)
            })
            .catch(function (error) {
                e.preventDefault();
                setErrorMessageEdit(true)
            });
    }


    // Declare the initial values of the AddFormComponent
    const initialValues = {
        dishName: theDish.libellee,
        dishProvider: theDish.nomFrn,
        dishCat: theDish.nomCat,
        dishPrice: theDish.prix
    };

    // Validation des inputs
    const validationSchemas = yup.object().shape({
        dishName: yup.string('Veuillez insérer du text uniquement.')
            .required('Veuillez indiquer le libellé.')
            .min(3, "Veuillez insérer minimum 3 caractères.")
            .matches(/^[a-zA-Z0-9,'\-/\s]+$/, 'Le libellé ne doit pas contenir de caractères spéciaux'),
        dishCat: yup.string('Veuillez insérer du text uniquement.')
            .required('Veuillez indiquer la catégorie.'),
        dishProvider: yup.string('Veuillez insérer du text uniquement.')
            .required('Veuillez indiquer le fournisseur.'),
        dishPrice: yup.number('Veuillez entrer uniquement des chiffres.')
            .required('Veuillez indiquer le prix.')
            .positive('Veuillez indiquer un prix correct.'),

    });


    return <>
        <SuccessModal
            modalState={successUpdateModal}
            action={()=>setSuccessUpdateModal(false)}
            successMessage={'Les modifications ont été enregistrées.'}/>

        <ErrorModal
            modalState={showErrorModal}
            action={()=>setErrorModal(false)}
            errorMessage={"Les modifications n'ont pas été enregistrées. Veuillez suivre les instructions du formulaire."} />


        <dialog open={editModal}
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemas}
                    onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) =>{
                        console.log(values);
                        resetForm()
                        setSubmitting(false);}}
                >

                {({ values, handleSubmit, setFieldValue, isValid, resetForm }) =>{
                    return (
                    <form

                        action="src/components/modal/EditDishModal.jsx"
                        method="dialog"
                        className="bg-white shadow-xl p-0 w-[40%] h-fit text-font-main mt-28 text-left max-sm:w-[99%]">

                        {/*Header Modal*/}
                        <div className="flex justify-between border-b-2 p-4">
                            <h3 className="text-xl">Modification d'un plat</h3>
                            <CloseButton onClickAction={(e) =>{
                                e.preventDefault()
                                setEditModal(false)
                                setErrorMessageEdit(false)
                                resetForm()}
                            }
                            />
                        </div>
                        {/*End Header Modal*/}

                        {/*Body Modal*/}
                        <div className="px-4 flex flex-col gap-4 my-4">

                            <TextInputEdit
                                label={'Libellé du plat'}
                                fieldName={"dishName"}
                                value={values.dishName}
                                onChangeAction={(e) =>{
                                    e.propertyIsEnumerable()
                                    setFieldValue('dishName', e.target.value)
                                    console.log(values.dishName)}} />

                            <SelectInputEdit
                                label={'Fournisseur'}
                                fieldName={'dishProvider'}
                                defaultOption={'Veuillez selectionner un fournisseur'}
                                arrayToDisplay={fournisseurs}
                                value={values.dishProvider}
                                onChangeAction={(e) =>{
                                    e.preventDefault()
                                    setFieldValue('dishProvider', e.target.value)
                                    console.log(values.dishProvider)}}/>

                            <SelectInputEdit
                                label={'Catégorie'}
                                fieldName={'dishCat'}
                                defaultOption={'Veuillez selectionner une catégorie'}
                                arrayToDisplay={categories}
                                value={values.dishCat}
                                onChangeAction={(e) =>{
                                    e.preventDefault()
                                    setFieldValue('dishCat', e.target.value)
                                    console.log(values.dishCat)}}/>

                            <NumberInputEdit
                                label="Prix"
                                fieldName="dishPrice"
                                value={values.dishPrice}
                                onChangeAction={(e) =>{
                                    e.preventDefault()
                                    setFieldValue('dishPrice', e.target.value)
                                    console.log(values.dishPrice)}}/>

                            {showErrorMessageEdit &&
                                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2" role="alert">
                                    <p>Veuillez suivre les indications pour valider les modifications.</p>
                                </div>
                            }


                        </div>
                        {/*END Body Modal*/}

                        {/* footer Modal*/}
                        <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                            <button type="submit"
                                    value="cancel"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setEditModal(false),
                                        setErrorMessageEdit(false)
                                        resetForm()
                                    }}>Annuler</button>

                            <ActionButton
                                onClickAction={(e) => {
                                    if (isValid) {
                                        e.preventDefault()
                                        handleSubmitEdit(e, values.dishName, values.dishCat, values.dishProvider, values.dishPrice);
                                        resetForm()
                                    }else{
                                        e.preventDefault()
                                        setErrorMessageEdit(true)
                                    }
                                }}
                                isIconNeeded={false}
                                label={'Enregistrer les modifications'}
                                bgColor={'bg-green-button'} bgColorHover={'bg-green-button-hover'}
                            />
                        </div>
                        {/* END footer Modal*/}

                    </form>
                )}}
                </Formik>
            </div>

        </dialog>
    </>
}
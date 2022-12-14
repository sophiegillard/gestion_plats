import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik';
import * as yup from 'yup';
import {SuccessModal} from "./SuccessModal.jsx";
import {CloseButton} from "../buttons/CloseButton.jsx";
import {ActionButton} from "../buttons/ActionButton.jsx";
import {useEffect, useRef, useState} from "react";
import {fetchDatas} from "../../utils/fetchDatas.js";
import axios from "axios";
import {ErrorModal} from "./ErrorModal";
import {TextInputAdd} from "./AddFormComponent/TextInputAdd.jsx";
import {SelectInputAdd} from "./AddFormComponent/SelectInputAdd";
import {NumberInputAdd} from "./AddFormComponent/NumberInputAdd";
import {port, setUrlCategory, setUrlCurrentPage, setUrlFournisseur, setUrlIndex} from "../../../setUrl.js";

export const AddDishModal = ({isModalOpen, SetModalOpen, setDatas, pageNumber}) =>{

    /* Declaration of the useState */
    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])
    const [isErrorMessage, setErrorMessage ] = useState (false)
    const [isSuccessModal, setSuccessModal] = useState(false)
    const [showErrorModal, setErrorModal] = useState(false)

    useEffect(() => {
        const urlCategory= setUrlCategory(port)
        const urlFournisseur= setUrlFournisseur(port)
        fetchDatas (setCategories, urlCategory);
        fetchDatas (setFournisseurs, urlFournisseur);
    }, []);

    const handleSubmit = (e, name, provider, cat, price) =>{
        e.preventDefault();
        if(name != '' && provider != '' && cat != '' && price != ''){
        const urlIndex = setUrlIndex(port)

            axios.post(urlIndex, {
                libellee: name,
                fournisseur : provider,
                categorie : cat,
                prix: price
            })
                .then(function (response) {
                    const urlPageIndex= setUrlCurrentPage(port, pageNumber)
                    fetchDatas (setDatas,urlPageIndex);
                    SetModalOpen(false);
                    setSuccessModal(true)
                    setErrorMessage(false)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            e.preventDefault();
            setErrorMessage(true)
        }
    }

    // Declare the initial values of the AddFormComponent
    const initialValuesCreate = {
        dishName: '',
        dishProvider: '',
        dishCat: '',
        dishPrice: 0
    };

    // Validation des inputs
    const validationSchema = yup.object().shape({
        dishName: yup.string('Veuillez ins??rer du text uniquement.')
                    .required('Veuillez indiquer le libell??.')
                    .min(3, "Veuillez ins??rer minimum 3 caract??res.")
                    .matches(/^[a-zA-Z0-9,'\-/\s]+$/, 'Le libell?? ne doit pas contenir de caract??res sp??ciaux'),
        dishCat: yup.string('Veuillez ins??rer du text uniquement.')
                    .required('Veuillez indiquer la cat??gorie.'),
        dishProvider: yup.string('Veuillez ins??rer du text uniquement.')
                    .required('Veuillez indiquer le fournisseur.'),
        dishPrice: yup.number('Veuillez entrer uniquement des chiffres.')
                    .required('Veuillez indiquer le prix.')
                    .positive('Veuillez indiquer un prix correct.'),

    });

    return <>

        <SuccessModal
            modalState={isSuccessModal}
            action={()=>setSuccessModal(false)}
            successMessage={'Le plat a bien ??t?? sauvegard??.'}/>

        <ErrorModal
            modalState={showErrorModal}
            action={()=>setErrorModal(false)}
            errorMessage={'Veuillez suivre les instructions du formulaire.'} />

        <dialog open={isModalOpen}
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">

                <Formik
                initialValues={initialValuesCreate}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) =>{
                    console.log(values);
                    setSubmitting(false);}}
                >

                {formik => (
                    <form action="src/components/modal/AddDishModal.jsx"
                          method="dialog"
                          className="bg-white shadow-xl p-0 w-[40%] h-fit text-font-main mt-28 max-sm:w-[99%]">

                        {/*Header Modal*/}
                        <div className="flex justify-between border-b-2 p-4">
                            <h3 className="text-xl">Ajout d'un plat</h3>
                            <CloseButton onClickAction={() =>{
                                SetModalOpen(false),
                                setErrorMessage(false),
                                formik.resetForm()}} />
                        </div>
                        {/*End Header Modal*/}

                        {/*Body Modal*/}
                        <div className="px-4 flex flex-col gap-4 my-4">

                            <TextInputAdd
                                label={'Libell?? du plat'}
                                fieldName={"dishName"}/>

                            <SelectInputAdd
                                label={'Fournisseur'}
                                fieldName={'dishProvider'}
                                defaultOption={'Veuillez selectionner un fournisseur'}
                                arrayToDisplay={fournisseurs}  />

                            <SelectInputAdd
                                label={'Cat??gorie'}
                                fieldName={'dishCat'}
                                defaultOption={'Veuillez selectionner une cat??gorie'}
                                arrayToDisplay={categories}  />

                            <NumberInputAdd
                                label="Prix"
                                fieldName="dishPrice" />

                            {isErrorMessage &&
                                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2" role="alert">
                                    <p>Veuillez compl??ter tous les champs pour valider</p>
                                </div>
                            }

                        </div>
                        {/*END Body Modal*/}


                        {/* footer Modal*/}
                        <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                            <button type="button"
                                    onClick={() => {
                                        SetModalOpen(false),
                                        setErrorMessage(false),
                                        formik.resetForm()}}
                                    value="cancel">Annuler</button>

                            <ActionButton
                                onClickAction={(e) => {
                                    if (formik.isValid) {
                                        handleSubmit(e, formik.values.dishName, formik.values.dishProvider, formik.values.dishCat, formik.values.dishPrice);
                                        formik.resetForm();
                                    } else{
                                        e.preventDefault()
                                        setErrorMessage(true)
                                    }
                                }}
                                isIconNeeded={false}
                                label={'Ajouter'}
                                bgColor={'bg-green-button'} bgColorHover={'bg-purple-button-hover'}
                            />
                        </div>
                        {/*END footer Modal*/}

                    </form>
                )}
                </Formik>
            </div>
        </dialog>
    </>

};

import {useEffect, useRef, useState} from "react";
import {fetchDatas} from "../../utils/fetchDatas.js";
import axios from "axios";
import {CloseButton} from "../modalComponents/CloseButton.jsx";
import {TextInputModal} from "../modalComponents/TextInputModal.jsx";
import {SelectInputModal} from "../modalComponents/SelectInputModal.jsx";
import {NumberInputModal} from "../modalComponents/NumberInputModal.jsx";
import {ActionButton} from "../buttons/ActionButton.jsx";
import {SuccessModal} from "./SuccessModal.jsx";

export const EditDishModal = ({editModal, setEditModal, theDish, setDatas, datas}) =>{

    const id = theDish.id;

    const [libellee, setLibellee]= useState(theDish.libellee)
    const [categorie, setCategorie]= useState(theDish.nomCat)
    const [fournisseur, setFournisseur]= useState(theDish.nomFrn)
    const [prix, setPrix]= useState(theDish.prix)

    const [successUpdateModal, setSuccessUpdateModal] = useState(false)

    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])

    const updatedDish = {id, libellee, categorie, fournisseur, prix}

    useEffect(() => {
        fetchDatas (setCategories,'http://localhost:8888/api/category.php');
        fetchDatas (setFournisseurs, 'http://localhost:8888/api/fournisseur.php');
    }, []);

    const updateDish = (setDatas, datas, id, updated) => {
            datas.map((item) => item.id === id ? updated : item)}


    const handleSubmit = (e) => {
      /*  e.preventDefault();*/
        updateDish(setDatas, datas, id, updatedDish)
        axios.put(`http://localhost:8888/api/index.php/${id}/update`, updatedDish)
            .then(function(response){
                const url= 'http://localhost:8888/api/index.php'
                fetchDatas (setDatas,url);
        });

    }


    return <>
        <SuccessModal
            modalState={successUpdateModal}
            successMessage={'Les modifications ont été enregistrées.'}/>

        <dialog modal-mode="mega"
                open={editModal} data-modal-backdrop="static"
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">

                <form
                    onSubmit={()=>handleSubmit()}
                    method="dialog"
                    className="bg-white shadow-xl p-0 w-[40%] h-fit text-font-main mt-28">

                    {/*Header Modal*/}
                    <div className="flex justify-between border-b-2 p-4">
                        <h3 className="text-xl">Modification d'un plat</h3>
                        <CloseButton onClickAction={() => setEditModal(false)} />
                    </div>
                    {/*End Header Modal*/}


                                <div className="px-4 flex flex-col gap-4 my-4">

                                    <TextInputModal
                                        label="Libellée du plat"
                                        name="libellée"
                                        value={libellee}
                                        onChangeAction={(e)=>setLibellee(e.target.value)} />


                                    <SelectInputModal
                                        label={'Famille du plat'}
                                        optionText={'Veuillez selectionner une famille de plat'}
                                        arrayToDisplay={categories}
                                        value={categorie}
                                        name="catégorie"
                                        onChangeAction={(e)=>setCategorie(e.target.value)}
                                    />

                                    <SelectInputModal
                                        label={'Fournisseur'}
                                        optionText={'Veuillez selectionner un fournisseur'}
                                        arrayToDisplay={fournisseurs}
                                        value={fournisseur}
                                        name="fournisseur"
                                        onChangeAction={(e)=>setFournisseur(e.target.value)}
                                    />

                                    <NumberInputModal label={'Prix'} value={prix} name="prix" onChangeAction={(e)=>setPrix(e.target.value)}  />

                                </div>


                    <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                        <button type="submit" value="cancel">Annuler</button>

                        <ActionButton
                            isIconNeeded={false}
                            label={'Enregistrer les modifications'}
                            bgColor={'bg-green-button'} onClickAction={()=>setSuccessUpdateModal(true)}
                        />
                    </div>


                </form>

            </div>

        </dialog>
    </>
}
import {useState, useEffect, useRef} from "react";
import { fetchDatas } from "../../utils/fetchDatas.js";
import axios from "axios";
import {ActionButton} from "../buttons/ActionButton.jsx";
import {TextInputModal} from "../modalComponents/TextInputModal.jsx";
import {SelectInputModal} from '../modalComponents/SelectInputModal.jsx'
import {NumberInputModal} from "../modalComponents/NumberInputModal.jsx";
import {CloseButton} from "../modalComponents/CloseButton.jsx";
import {SuccessModal} from "./SuccessModal.jsx";



export const AddDish = ({isModalOpen, SetModalOpen, setDatas, datas}) =>{

/*    Declaration of the useState*/
    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])
    const [isErrorMessage, setErrorMessage ] = useState (false)
    const [isSuccessModal, setSuccessModal] = useState(false)

/*    Declaration of the const*/
    const dishName = useRef('');
    const dishProvider = useRef('')
    const dishCat = useRef('');
    const dishPrice = useRef('');

    useEffect(() => {
        const urlCategory= 'http://localhost:8888/api/category.php'
        const urlFournisseur= 'http://localhost:8888/api/fournisseur.php'
        fetchDatas (setCategories, urlCategory);
        fetchDatas (setFournisseurs, urlFournisseur);
    }, []);

    const handleSubmit = (e) =>{
        if(dishName.current.value != '' && dishProvider.current.value != '' && dishCat.current.value != '' && dishPrice.current.value != ''){
            const name = dishName.current.value;
            const provider = dishProvider.current.value;
            const cat = dishCat.current.value;
            const price = dishPrice.current.value;

            axios.post('http://localhost:8888/api/index.php', {
                libellee: name,
                prix: price,
                fournisseur : provider,
                categorie : cat
            })
                .then(function (response) {
                  /*  setDatas((datas) => [...datas, response]);*/
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            e.preventDefault();
            setErrorMessage(true)
        }

    }

    return <>
    <SuccessModal
        modalState={isSuccessModal}
        successMessage={'Le plat a bien été sauvegardé.'}/>

    <dialog modal-mode="mega" open={isModalOpen}
    className="shadow-xl backdrop-blur p-0 min-w-[50%] text-font-main">
        <form action="src/components/modal/AddDish.jsx" method="dialog" className="" onSubmit={(e)=>handleSubmit(e)}>

            <div className="flex justify-between border-b-2 p-4">
                <h3 className="text-xl">Ajout d'un plat</h3>
                <CloseButton onClickAction={() =>{ SetModalOpen(false), setErrorMessage(false)}} />
            </div>

            <div className="px-4 flex flex-col gap-4 my-4">

                <TextInputModal label={'Libellé du plat'} forwardRef={dishName} />

                <SelectInputModal label={'Famille du plat'}
                                  forwardRef={dishCat}
                                  optionText={'Veuillez selectionner une famille de plat'}
                                  arrayToDisplay={categories}
                                  />

                <SelectInputModal label={'Fournisseur'}
                                  forwardRef={dishProvider}
                                  optionText={'Veuillez selectionner un fournisseur'}
                                  arrayToDisplay={fournisseurs}
                />

                <NumberInputModal label={'Prix'} forwardRef={dishPrice} />

                {isErrorMessage && <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2" role="alert">
                    <p>Veuillez compléter tous les champs pour valider</p>
                </div>}

            </div>

            <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                <button type="button" onClick={() => SetModalOpen(false)} value="cancel">Annuler</button>

                <ActionButton
                    isIconNeeded={false}
                    label={'Ajouter'}
                    bgColor={'bg-green-button'} onClickAction={()=>setSuccessModal(true)}
                    />
            </div>

        </form>
    </dialog>
    </>
}
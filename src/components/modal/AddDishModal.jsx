import {useState, useEffect, useRef} from "react";
import { fetchDatas } from "../../utils/fetchDatas.js";
import axios from "axios";
import {ActionButton} from "../buttons/ActionButton.jsx";
import {TextInputModal} from "./modalComponents/TextInputModal.jsx";
import {SelectInputModal} from './modalComponents/SelectInputModal.jsx'
import {NumberInputModal} from "./modalComponents/NumberInputModal.jsx";
import {CloseButton} from "./modalComponents/CloseButton.jsx";
import {SuccessModal} from "./SuccessModal.jsx";

export const AddDishModal = ({isModalOpen, SetModalOpen, setDatas, pageNumber}) =>{

    /* Declaration of the useState */
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
        e.preventDefault();
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
                    const url= `http://localhost:8888/api/index.php?currentPage=${pageNumber}`
                    fetchDatas (setDatas,url);
                    SetModalOpen(false);
                    e.target.reset();
                    setSuccessModal(true)
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
        action={()=>setSuccessModal(false)}
        successMessage={'Le plat a bien été sauvegardé.'}/>

    <dialog open={isModalOpen}
            className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

        <div className="flex justify-center">

            <form action="src/components/modal/AddDishModal.jsx"
                  method="dialog"
                  className="bg-white shadow-xl p-0 w-[40%] h-fit text-font-main mt-28 max-sm:w-[99%]"
                  onSubmit={(e)=>handleSubmit(e)}>

                {/*Header Modal*/}
                <div className="flex justify-between border-b-2 p-4">
                    <h3 className="text-xl">Ajout d'un plat</h3>
                    <CloseButton onClickAction={() =>{ SetModalOpen(false), setErrorMessage(false)}} />
                </div>
                {/*End Header Modal*/}

                {/*Body Modal*/}
                <div className="px-4 flex flex-col gap-4 my-4">

                    <TextInputModal
                        label={'Libellé du plat'}
                        forwardRef={dishName} />

                    <SelectInputModal
                        label={'Famille du plat'}
                        forwardRef={dishCat}
                        optionText={'Veuillez selectionner une famille de plat'}
                        arrayToDisplay={categories}
                        />

                    <SelectInputModal
                        label={'Fournisseur'}
                        forwardRef={dishProvider}
                        optionText={'Veuillez selectionner un fournisseur'}
                        arrayToDisplay={fournisseurs}
                        />

                    <NumberInputModal
                        label={'Prix'}
                        forwardRef={dishPrice}
                        inputLabel={'Prix du plat'}/>

                        {isErrorMessage &&
                            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2" role="alert">
                                <p>Veuillez compléter tous les champs pour valider</p>
                            </div>
                        }

                </div>
                {/*END Body Modal*/}


                {/* footer Modal*/}
                <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                    <button type="button"
                            onClick={() => SetModalOpen(false)}
                            value="cancel">Annuler</button>

                    <ActionButton
                        isIconNeeded={false}
                        label={'Ajouter'}
                        bgColor={'bg-green-button'} bgColorHover={'bg-purple-button-hover'}
                        />
                </div>
                {/*END footer Modal*/}

            </form>
        </div>
    </dialog>
    </>
}
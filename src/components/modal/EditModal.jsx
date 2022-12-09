import close from "../../../public/assets/close.png";
import {useEffect, useRef, useState} from "react";
import {fetchDatas} from "../../utils/fetchDatas.js";
import axios from "axios";
import {CloseButton} from "../modalComponents/CloseButton.jsx";
import {TextInputModal} from "../modalComponents/TextInputModal.jsx";
import {SelectInputModal} from "../modalComponents/SelectInputModal.jsx";
import {NumberInputModal} from "../modalComponents/NumberInputModal.jsx";

export const EditModal = ({editModal, setEditModal, setDatas, datas, selectedId}) =>{

    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])

    let itemToEdit = '';

    useEffect(() => {
        fetchDatas (setCategories,'http://localhost:8888/api/category.php');
        fetchDatas (setFournisseurs, 'http://localhost:8888/api/fournisseur.php');
    }, []);

    let dishName;
    let dishProvider;
    let dishCat ;
    let dishPrice;

   /* {datas.map(data =>{
        if(data.id === selectedId){
            dishName = useRef(data.libellee);
            dishProvider = useRef(data.nomCat)
            dishCat = useRef(data.nomFrn);
            dishPrice = useRef(data.prix);
        }
    })}*/

    const handleSubmit = () =>{
        const name = dishName;
        const provider = dishProvider.current.value;
        const cat = dishCat.current.value;
        const price = dishPrice.current.value;

        console.log(name)


       /* axios.post('http://localhost:8888/api/index.php', {
            libellee: name,
            prix: price,
            fournisseur : provider,
            categorie : cat
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }


    return <>

        <dialog modal-mode="mega"
                open={editModal} data-modal-backdrop="static"
                className="bg-black bg-opacity-60 h-full w-screen absolute top-0 scroll-none backdrop-blur-sm">

            <div className="flex justify-center">

                <form onSubmit={()=>handleSubmit()} method="dialog" className="bg-white shadow-xl p-0 w-[40%] h-fit text-font-main mt-28">

                    {/*Header Modal*/}
                    <div className="flex justify-between border-b-2 p-4">
                        <h3 className="text-xl">Modification d'un plat</h3>
                        <CloseButton onClickAction={() => setEditModal(false)} />
                    </div>
                    {/*End Header Modal*/}

                        {datas.map(data =>{
                            if(data.id === selectedId){
                                return(
                                <div className="px-4 flex flex-col gap-4 my-4">

                                <TextInputModal label={'Libellé du plat'}
                                                forwardRef={dishName}
                                                defaultValue={data.libellee}
                                                />

                                <SelectInputModal label={'Famille du plat'}
                                                  forwardRef={dishCat}
                                                  optionText={'Veuillez selectionner une famille de plat'}
                                                  arrayToDisplay={categories}
                                                  defaultValue={data.nomCat}
                                />

                                <SelectInputModal label={'Fournisseur'}
                                                  forwardRef={dishProvider}
                                                  optionText={'Veuillez selectionner un fournisseur'}
                                                  arrayToDisplay={fournisseurs}
                                                  defaultValue={data.nomFrn}
                                />

                                <NumberInputModal label={'Prix'}
                                                  forwardRef={dishPrice}
                                                  defaultValue={data.prix} />

                                </div>)
                            }
                        })}

                    <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                        <button type="submit" value="cancel">Annuler</button>
                        <button type="submit"
                                className="bg-green-button rounded-sm shadow-lg text-white px-4 p-1">Enregistrer les modifications</button>
                    </div>


                </form>

            </div>

        </dialog>
    </>
}
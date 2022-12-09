import close from "../../../public/assets/close.png";
import {useEffect, useRef, useState} from "react";
import {fetchDatas} from "../../utils/fetchDatas.js";
import axios from "axios";
import {CloseButton} from "../modalComponents/CloseButton.jsx";
import {TextInputModal} from "../modalComponents/TextInputModal.jsx";
import {SelectInputModal} from "../modalComponents/SelectInputModal.jsx";
import {NumberInputModal} from "../modalComponents/NumberInputModal.jsx";

export const EditModal = ({editModal, setEditModal, setDatas, datas, selectedId}) =>{

    const [inputs, setInputs] = useState('')
    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])

    let itemToEdit = '';


    useEffect(() => {
        const url= `http://localhost:8888/api/getData.php/22`
        fetchDatas (setInputs,url);
    }, []);


    useEffect(() => {
        const urlCategory= 'http://localhost:8888/api/category.php'
        const urlFournisseur= 'http://localhost:8888/api/fournisseur.php'
        fetchDatas (setCategories, urlCategory);
        fetchDatas (setFournisseurs, urlFournisseur);
    }, []);


    const dishName = useRef('test');
    const dishProvider = useRef()
    const dishCat = useRef();
    const dishPrice = useRef();

    const handleNewValues = (item, e, newValue) =>{
        console.group()
        const tt = item.current.value
        console.log(e.target.value)
        console.groupEnd()
        newValue = tt


    }

    const handleSubmit = (e) =>{
        const name = dishName.current.value;
        const provider = dishProvider.current.value;
        const cat = dishCat.current.value;
        const price = dishPrice.current.value;

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

/*    let pp = document.querySelectorAll('.row-content')
    console.log(pp)*/

    const handleSelectedElem = (idToFind, array) =>{
        array.map(item =>{
            if(item.id === idToFind) {
                itemToEdit = item;
                console.log(itemToEdit)
                return itemToEdit;
            }
        })
    }

    handleSelectedElem ( selectedId, datas )

    const isItemToEdit = () => {
        let idItemToEdit = '';
        let allItems = document.querySelectorAll('.edit-button')
        allItems.forEach(item =>{
            console.log(item)
            /*
            if (row.firstChild.checked){
                arrayIds.push(row.id)
                console.log(arrayIds)
            }*/
        })
        return idItemToEdit;
    }




    return <>
        <dialog modal-mode="mega" open={editModal}
                className="shadow-xl backdrop-blur p-0 min-w-[50%] text-font-main">
            <form action="src/components/modal/EditModal.jsx" method="dialog" className="">

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
                                            value={data.libellee}
                                            onChangeAction={(e)=>handleNewValues(dishName, e, data.libellee)}/>

                            <SelectInputModal label={'Famille du plat'}
                                              forwardRef={dishCat}
                                              optionText={'Veuillez selectionner une famille de plat'}
                                              arrayToDisplay={categories}
                                              value={data.nomCat}
                            />

                            <SelectInputModal label={'Fournisseur'}
                                              forwardRef={dishProvider}
                                              optionText={'Veuillez selectionner un fournisseur'}
                                              arrayToDisplay={fournisseurs}
                                              value={data.nomFrn}
                            />

                            <NumberInputModal label={'Prix'} forwardRef={dishPrice} value={data.prix} />

                            </div>)
                        }
                    })}

                <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                    <button type="submit" value="cancel">Annuler</button>
                    <button type="submit" onClick={()=>isItemToEdit()}
                            className="bg-green-button rounded-sm shadow-lg text-white px-4 p-1">Enregistrer les modifications</button>
                </div>


            </form>
        </dialog>
    </>
}
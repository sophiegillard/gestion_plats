import add from "../../public/assets/add.png"
import { AddDish } from "./modal/AddDish.jsx"
import { useState, useEffect } from "react";
import { fetchDatas } from "../utils/fetchDatas";
import { DeleteButton } from './buttons/DeleteButton.jsx'
import {EditButton} from "./buttons/EditButton.jsx";
import {EditModal} from "./modal/EditModal.jsx";
import {ConfirmationDeleteModal} from "./modal/ConfirmationDeleteModal.jsx";
import {isCheckbox} from "../utils/isCheckbox.js";
import {ActionButton} from "./buttons/ActionButton.jsx";

export const Table = () =>{
    const [datas, setDatas] = useState([])
    const [isModalOpen, SetModalOpen] = useState(false)
    const [isBoxChecked, setBoxChecked] = useState(false)
    const [editModal, setEditModal] = useState (false)
    const [isDeleteModal, setDeleteModal] = useState(false)

    let checkIfCheckBoxAreCheck = isCheckbox();
    console.log(checkIfCheckBoxAreCheck.length)

    const handleCheckBox = event => {
        if (event.target.checked) {
          setBoxChecked(true);
        } else {
          setBoxChecked(false);
        }
      };
     
    useEffect(() => {
        const url= 'http://localhost:8888/api/index.php'
        fetchDatas (setDatas,url);
    }, []);

    /*console.log(datas)
    let idFound = window.addEventListener('click', (e)=>console.log(e.target.parentNode.parentNode.parentNode.id))

    idFound
    */
    return (
        <>
        <ConfirmationDeleteModal
            warning = {'Attention'}
            message={"Etes-vous sûr de vouloir supprimer définitivement l'élément?"}
            isDeleteModal={isDeleteModal}
            setDeleteModal = {setDeleteModal}
            />
        <AddDish isModalOpen={isModalOpen} SetModalOpen={SetModalOpen} setDatas={setDatas} datas={datas} />
        <EditModal editModal={editModal} setEditModal={setEditModal} setDatas={setDatas} datas={datas} />


            <main className="flex flex-col justify-center place-items-center">

            <div className="table__title__container flex flex-row justify-between bg-gradient-to-r from-light-blue to-dark-blue h-14 text-white px-4 w-[90%] place-items-center">
                <h2 className="table__title ">Gestion des plats</h2>

                <div className="flex flex-row gap-4">
                    
                    {checkIfCheckBoxAreCheck.length === 0  ? null : <DeleteButton setDeleteModal={setDeleteModal}/>}

                    <ActionButton
                        onClickAction={()=>SetModalOpen(true)}
                        label={'Ajouter'}
                        isIconNeeded={true}
                        image={add}
                        altImg={'icon ajouter'}
                        bgColor={'bg-green-button'} />

                </div>

            </div>

            <div className="table w-[90%] border-collapse"> 
                <div className="table__container table w-full text-center">

                    <div className="table-header-group font-bold h-12">
                        <div className="table-row border-b-2 border-gray-400">
                            <div className="table-cell align-middle"></div>
                            <div className="table-cell align-middle">Nom</div>
                            <div className="table-cell align-middle">Fournisseur</div>
                            <div className="table-cell align-middle">Catégorie</div>
                            <div className="table-cell align-middle">Prix</div>
                            <div className="table-cell align-middle">Actions</div>
                        </div>
                    </div>

                    <div className="table-row-group">

                        {datas.map((data, key)=>

                            <div key={key} id={data.id} className="table-row row-content border-b-2 border-gray-200 h-12">

                                <input type="checkbox"
                                value={data.id}
                                onChange={handleCheckBox}
                                ></input>

                                <div className="table-cell align-middle">{data.libellee}</div>

                                <div className="table-cell align-middle" >{data.nomFrn}</div>

                                <div className="table-cell align-middle">{data.nomCat}</div>

                                <div className="table-cell align-middle">{data.prix}</div>

                                <div className="table-cell align-middle">
                                    <EditButton setEditModal={setEditModal} />
                                </div>

                            </div>
                        )}                        
                        
                    </div>

                </div>
            </div>
        </main>
        </>
    )
}
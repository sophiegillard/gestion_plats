import add from "../../public/assets/add.png"
import { AddDishModal } from "./modal/AddDishModal.jsx"
import {useState, useEffect, useRef} from "react";
import { fetchDatas } from "../utils/fetchDatas";
import { DeleteButton } from './buttons/DeleteButton.jsx'
import {EditButton} from "./buttons/EditButton.jsx";
import {EditModal} from "./modal/EditModal.jsx";
import {ConfirmationDeleteModal} from "./modal/ConfirmationDeleteModal.jsx";
import {isCheckbox} from "../utils/isCheckbox.js";
import {ActionButton} from "./buttons/ActionButton.jsx";
import {handleCheckboxChange} from "../utils/handleCheckboxChange.js";
import logo from "../../public/assets/logo.png";
import {Link} from "react-router-dom";

export const Table = () =>{
    const [datas, setDatas] = useState([])
    const [isModalOpen, SetModalOpen] = useState(false)
    const [isBoxChecked, setBoxChecked] = useState(false)
    const [editModal, setEditModal] = useState (false)
    const [isDeleteModal, setDeleteModal] = useState(false)
    const [selectedId, setSelectedId] = useState('')

    let checkIfCheckBoxAreCheck = isCheckbox();
     
    useEffect(() => {
        const url= 'http://localhost:8888/api/index.php'
        fetchDatas (setDatas,url);
    }, []);



    return (
        <div className='bg-white'>
   {/*     To be moved to deleteButton?    */}
        <ConfirmationDeleteModal
            warning = {'Attention'}
            message={"Etes-vous sûr de vouloir supprimer définitivement l'élément?"}
            isDeleteModal={isDeleteModal}
            setDeleteModal = {setDeleteModal}
            setDatas={setDatas}
            />

        {/*   Modals  */}

            <main className="flex flex-col justify-center place-items-center">

            <header className="table__title__container flex flex-row justify-between bg-gradient-to-r from-light-blue to-dark-blue h-14 text-white px-4 w-full place-items-center">

                <div className="flex flex-row gap-4 align-middle">
                    <Link to={'/'}>
                        <img src={logo} alt='logo' className="h-10 " />
                    </Link>
                    <h2 className="table__title text-2xl self-center">Gestion des plats</h2>
                </div>

                <div className="flex flex-row gap-4">

                    {/*  Show Delete Button only if one or more boxes are checked  */}
                    {checkIfCheckBoxAreCheck.length === 0  ? null : <DeleteButton action={()=>setDeleteModal(true)} />}

                    {/* Button to open Add Dish Modal */}
                    <ActionButton
                        onClickAction={()=>SetModalOpen(true)}
                        label={'Ajouter'}
                        isIconNeeded={true}
                        image={add}
                        altImg={'icon ajouter'}
                        bgColor={'bg-green-button'} />

                </div>

            </header>

            {/*  Table  */}
            <div className="table w-full border-collapse">
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

                                <div className="pl-2 h-12 py-3 justify-center">
                                    <input type="checkbox"
                                    value={data.id}
                                    onChange={() => handleCheckboxChange(setDatas, datas, data.id)}
                                    checked={!data.checked}
                                    ></input>
                                </div>

                                <div className="table-cell align-middle">{data.libellee}</div>

                                <div className="table-cell align-middle" >{data.nomFrn}</div>

                                <div className="table-cell align-middle">{data.nomCat}</div>

                                <div className="table-cell align-middle">{data.prix}</div>

                                <div className="table-cell align-middle" >
                                    <EditButton action={()=>{
                                        setEditModal(true), setSelectedId(data.id)}} idButton={data.id} />
                                </div>

                            </div>
                        )}                        
                        
                    </div>

                </div>
            </div>

                <AddDishModal isModalOpen={isModalOpen} SetModalOpen={SetModalOpen} setDatas={setDatas} datas={datas} />
                <EditModal editModal={editModal} setEditModal={setEditModal} setDatas={setDatas} datas={datas} selectedId={selectedId}/>

        </main>
        </div>
    )
}
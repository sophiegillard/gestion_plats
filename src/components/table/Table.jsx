import add from "../../../public/assets/add.png"
import { AddDishModal } from "../modal/AddDishModal.jsx"
import {useState, useEffect, useRef} from "react";
import { fetchDatas } from "../../utils/fetchDatas.js";
import { DeleteButton } from '../buttons/DeleteButton.jsx'
import {ConfirmationDeleteModal} from "../modal/ConfirmationDeleteModal.jsx";
import {isCheckbox} from "../../utils/isCheckbox.js";
import {ActionButton} from "../buttons/ActionButton.jsx";
import logo from "../../../public/assets/logo.png";
import {Link} from "react-router-dom";
import {DishRow} from "./DishRow.jsx";
import {handleCheckboxChange} from "../../utils/handleCheckboxChange.js";
import {ModalFooter} from "../modal/modalComponents/ModalFooter.jsx";

export const Table = () =>{
    const [datas, setDatas] = useState([])
    const [isModalOpen, SetModalOpen] = useState(false)
    const [isDeleteModal, setDeleteModal] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    let checkIfCheckBoxAreCheck = isCheckbox();
     
    useEffect(() => {
        const url= `http://localhost:8888/api/index.php?currentPage=${pageNumber}`;
        fetchDatas (setDatas,url);
    }, []);



    return (
        <div className='shadow-lg flex flex-col justify-between max-sm=h-screen'>

        <ConfirmationDeleteModal
            warning = {'Attention'}
            message={"Etes-vous sûr de vouloir supprimer définitivement l'élément?"}
            isDeleteModal={isDeleteModal}
            setDeleteModal = {setDeleteModal}
            setDatas={setDatas}
            pageNumber={pageNumber}
            />

        {/*   Modals  */}

            <main className="flex flex-col justify-between place-items-center h-full">

            <div className="modal_header table__title__container flex flex-row justify-between bg-gradient-to-r from-light-blue to-dark-blue md:h-14 text-white px-4 w-full place-items-center
            max-sm:flex-col max-sm:py-2 max-sm:gap-4">

                <div className="flex flex-row gap-4 align-middle">
                    <Link to={'/'}>
                        <img src={logo} alt='logo' className="h-10" />
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
                        bgColor={'bg-green-button'} bgColorHover={'bg-green-button-hover'} />

                </div>

            </div>

            {/*  Table  */}
            <div className="table max-sm:text-sm w-full flex-grow border-collapse overflow-x-scroll overflow-scroll">
                <div className="table__container table w-full text-center">

                    <div className="table-header-group font-bold h-16">
                        <div className="table-row border-b-2 border-gray-400">
                            <div className="table-cell align-middle w-[calc(10%)]"></div>
                            <div className="table-cell align-middle w-[calc(22%)]">Nom</div>
                            <div className="table-cell align-middle w-[calc(22%)]">Fournisseur</div>
                            <div className="table-cell align-middle w-[calc(22%)]">Catégorie</div>
                            <div className="table-cell align-middle w-[calc(10%)]">Prix</div>
                            <div className="table-cell align-middle w-[calc(14%)]">Actions</div>
                        </div>
                    </div>

                    <div className="table-row-group flex justify-between">

                        {datas.map((data)=>

                            <div key={data.id} id={data.id} className="table-row row-content border-b-2 border-gray-200 flex-grow h-[calc(10%)]">

                                <DishRow data={data}
                                setDatas={setDatas}
                                datas={datas}
                                pageNumber={pageNumber}
                                onChangeAction={()=>handleCheckboxChange(setDatas, datas, data.id)}/>

                            </div>
                        )}                        
                        
                    </div>

                </div>
            </div>

            <AddDishModal isModalOpen={isModalOpen}
                              SetModalOpen={SetModalOpen}
                              setDatas={setDatas}
                              pageNumber={pageNumber}/>

            </main>

            <footer className="">
            <ModalFooter pageNumber={pageNumber}
                         setPageNumber={setPageNumber}
                         setDatas={setDatas}
                         datas={datas}/>
            </footer>

        </div>
    )
}
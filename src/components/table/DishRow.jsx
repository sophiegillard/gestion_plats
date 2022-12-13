import {EditButton} from "../buttons/EditButton.jsx";
import {useState} from "react";
import {EditDishModal} from "../modal/EditDishModal";
import {EditDishModal} from "../modal/EditDishModal.jsx";

export const DishRow = ({data, onChangeAction ,setDatas, datas, pageNumber}) =>{

    const [editModal, setEditModal] = useState (false)


    return <>

        <div className="pl-2 py-3 justify-center">
            <input type="checkbox"
                   value={data.id}
                   onChange={onChangeAction}
                   checked={!data.checked}
            ></input>
        </div>

        <div className="table-cell align-middle" data-label="Libellee">{data.libellee}</div>

        <div className="table-cell align-middle" data-label="Fournisseur°">{data.nomFrn}</div>

        <div className="table-cell align-middle" data-label="Catégorie">{data.nomCat}</div>

        <div className="table-cell align-middle" data-label="Prix">{data.prix}</div>

        <div className="table-cell align-middle">
            <EditButton
                onClickAction={(e)=>{
                    e.preventDefault()
                    setEditModal(true)
                }}
                idButton={data.id} />
        </div>

        <EditDishModal editModal={editModal}
                       setEditModal={setEditModal}
                       theDish={data}
                       setDatas={setDatas}
                       datas={datas}
                       pageNumber={pageNumber}/>


    </>
}
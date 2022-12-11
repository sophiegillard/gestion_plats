import {EditButton} from "../buttons/EditButton.jsx";
import {useState} from "react";
import {EditDishModal} from "../modal/EditDishModal";

export const DishRow = ({data, onChangeAction ,setDatas, datas}) =>{

    const [editModal, setEditModal] = useState (false)


    return <>

        <div className="pl-2 h-12 py-3 justify-center">
            <input type="checkbox"
                   value={data.id}
                   onClick={()=>console.log(data)}
                   onChange={onChangeAction}
                   checked={!data.checked}
            ></input>
        </div>

        <div className="table-cell align-middle">{data.libellee}</div>

        <div className="table-cell align-middle" >{data.nomFrn}</div>

        <div className="table-cell align-middle">{data.nomCat}</div>

        <div className="table-cell align-middle">{data.prix}</div>

        <div className="table-cell align-middle" >
            <EditButton action={()=>setEditModal(true)} idButton={data.id} />
        </div>

        <EditDishModal editModal={editModal} setEditModal={setEditModal} theDish={data} setDatas={setDatas} datas={datas}/>


    </>
}
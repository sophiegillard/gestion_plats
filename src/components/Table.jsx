import edit from "../../public/assets/edit.png"
import add from "../../public/assets/add.png"
import { AddDish } from "./AddDish"
import { useState, useEffect } from "react";
import { getAllDatas } from "../utils/getAllDatas";

export const Table = () =>{
    const [datas, setDatas] = useState([])
    const [isModalOpen, SetModalOpen] = useState(false)
     
    useEffect(() => {
        getAllDatas (setDatas);
    }, []);

    
    return (
        <>
        <AddDish isModalOpen={isModalOpen} SetModalOpen={SetModalOpen} />        
        <main className="flex flex-col justify-center place-items-center">

            <div className="table__title__container flex flex-row justify-between bg-gradient-to-r from-light-blue to-dark-blue h-14 text-white px-4 w-[90%] place-items-center">
                <h2 className="table__title ">Gestion des plats</h2>
                <button type="submit" onClick={() => SetModalOpen(true)}
                className="bg-green-button rounded-sm shadow-lg text-white w-28 p-2 flex flex-row gap-2 justify-center place-items-center">
                <span>Ajouter</span>
                <img src={add} alt="icon ajouter" className="h-4 w-4"/>
                </button>
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
                            <div className="table-cell align-middle">Action</div>
                        </div>
                    </div>

                    <div className="table-row-group">

                        {datas.map((data, key)=>
                            <div key={key} className="table-row border-b-2 border-gray-200 h-10">
                                <input type="checkbox"></input>
                                <div className="table-cell align-middle">{data.libellee}</div>
                                <div className="table-cell align-middle" >{data.nomFrn}</div>
                                <div className="table-cell align-middle">{data.nomCat}</div>
                                <div className="table-cell align-middle">{data.prix}</div>
                                <button type="submit" className="h-8 w-8 align-middle">
                                    <img src={edit} alt="edit button"
                                    className=""/>
                                </button>
                            </div>
                        )}                        
                        
                    </div>

                </div>
            </div>
        </main>
        </>
    )
}
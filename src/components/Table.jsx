import edit from "../../public/assets/edit.png"
import add from "../../public/assets/add.png"
import { AddDish } from "./AddDish"
import { useState, useEffect } from "react";
import { fetchDatas } from "../utils/fetchDatas";
import { DeleteButton } from './DeleteButton'

export const Table = () =>{
    const [datas, setDatas] = useState([])
    const [isModalOpen, SetModalOpen] = useState(false)
    const [isBoxChecked, setBoxChecked] = useState(false)

    const handleCheckBox = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
          console.log(event.target)
          setBoxChecked(true);
        } else {
          console.log('⛔️ Checkbox is NOT checked');
          setBoxChecked(false);
        }
      };
     
    useEffect(() => {
        const url= 'http://localhost:8888/api/index.php'
        fetchDatas (setDatas,'http://localhost:8888/api/index.php');
    }, []);

    
    return (
        <>
        <AddDish isModalOpen={isModalOpen} SetModalOpen={SetModalOpen} setDatas={setDatas} />   

        <main className="flex flex-col justify-center place-items-center">

            <div className="table__title__container flex flex-row justify-between bg-gradient-to-r from-light-blue to-dark-blue h-14 text-white px-4 w-[90%] place-items-center">
                <h2 className="table__title ">Gestion des plats</h2>

                <div className="flex flex-row gap-4">
                    
                    {isBoxChecked ? <DeleteButton datas={datas}/> : null} 
                    
                    <button type="submit" onClick={() => SetModalOpen(true)}
                    className="bg-green-button rounded-sm shadow-lg text-white px-4 py-2 flex flex-row gap-2 justify-center place-items-center">
                    <span>Ajouter</span>
                    <img src={add} alt="icon ajouter" className="h-4 w-4"/>
                    </button>
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
                            <div key={key} id={data.id} className="table-row row-content border-b-2 border-gray-200 h-10">
                                <input type="checkbox" 
                                value={data.id}
                                onChange={handleCheckBox}
                                ></input>
                                <div className="table-cell align-middle">{data.libellee}</div>
                                <div className="table-cell align-middle" >{data.nomFrn}</div>
                                <div className="table-cell align-middle">{data.nomCat}</div>
                                <div className="table-cell align-middle">{data.prix}</div>
                                <div className="table-cell align-middle bg-red-300 ">
                                    <button type="submit" className="h-5 w-8 align-middle bg-light-grey rounded-full flex justify-center  self-center">
                                        <img src={edit} alt="edit button"
                                        className="h-4 w-4 self-center justify-self-center"/>
                                    </button>
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
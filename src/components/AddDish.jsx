import close from "../../public/assets/close.png"
import {useState, useEffect} from "react";
import { useRef } from "react";
import { fetchDatas } from "../utils/fetchDatas";
import axios from "axios";



export const AddDish = ({isModalOpen, SetModalOpen}) =>{

    const [categories, setCategories] = useState([])
    const [fournisseurs, setFournisseurs] = useState([])
    const [inputs, setInputs] = useState({})
  

    useEffect(() => {
        const urlCategory= 'http://localhost:8888/api/category.php'
        const urlFournisseur= 'http://localhost:8888/api/fournisseur.php'
        fetchDatas (setCategories, urlCategory);
        fetchDatas (setFournisseurs, urlFournisseur);
    }, []);

    const dishName = useRef();
    const dishProvider = useRef()
    const dishCat = useRef();
    const dishPrice = useRef();

    const handleSubmit = (e) =>{
        

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
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return <>
    <dialog modal-mode="mega" open={isModalOpen}
    className="shadow-xl backdrop-blur p-0 min-w-[50%] text-font-main">
        <form action="" method="dialog" className="">

            <div className="flex justify-between border-b-2 p-4">
                <h3 className="text-xl">Ajout d'un plat</h3>
                <button>
                    <img src={close} alt="close button" className="h-4"
                    onClick={() => SetModalOpen(false)}/>
                </button>
            </div>

            <div className="px-4 flex flex-col gap-4 my-4">
                <p className="flex flex-col gap-2">
                    <label>Libellé du plat</label>
                        <input type="text" ref={dishName}
                        className="border-light-grey border-2 rounded-sm px-3 py-1"></input>
                </p>

                <p className="flex flex-col gap-2">
                    <label>Famille du plat </label>
                        <select ref={dishCat} className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent">
                            <option value="default">Veuillez selectionner une famille de plat</option>
                            {categories.map((category)=>
                                <option key={category.nomCat}>{category.nomCat}</option>
                            )}
                        </select>
                </p>



                <p className="flex flex-col gap-2">
                    <label>Fournisseur</label>
                            <select ref={dishProvider} className="border-light-grey border-2 rounded-sm px-3 py-1 bg-transparent">
                                
                                <option value="default">Veuillez selectionner un fournisseur</option>
                                {fournisseurs.map((fournisseur)=>
                                    <option key={fournisseur.nomFrn}>{fournisseur.nomFrn}</option>
                                )}

                            </select>
                </p>



                <p className="flex flex-col">
                    <label>Prix </label>
                        <input type="number" min="0" max="100" placeholder="0" ref={dishPrice} 
                        className="w-1/2 border-light-grey border-2 rounded-sm px-3 py-1 text-center"></input>
                </p>
            </div>

            <div className="px-4 bg-light-grey flex gap-4 justify-end p-4">
                <button type="submit" value="cancel">Annuler</button>
                <button type="submit" onClick={()=>handleSubmit()}
                className="bg-green-button rounded-sm shadow-lg text-white w-24 p-1">Ajouter</button>
            </div>


        </form>
    </dialog>
    </>
}
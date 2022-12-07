import trash from "../../public/assets/delete.png"
import axios from "axios"

export const DeleteButton = ({datas}) =>{


    const deleteDataByID = () =>{
        let arrayIds = [];
        let allRows = document.querySelectorAll('.row-content')
        allRows.forEach(row =>{
            if (row.firstChild.checked){
                arrayIds.push(row.id)
            }
        })
        arrayIds.forEach(id =>{
            axios.delete(`http://localhost:8888/api/index.php/${id}/delete`)
                .then(function(response){
                    console.log(response.data);
                })
        })
        console.log(arrayIds)
    }

    return <>
    <button type="submit" onClick={() => deleteDataByID(datas)}
                    className="bg-red-button rounded-sm shadow-lg text-white px-4 py-2 flex flex-row gap-2 justify-center place-items-center">
                    <span>Supprimer</span>
                    <img src={trash} alt="icon ajouter" className="h-4 w-4"/>
                    </button>
    </>
}
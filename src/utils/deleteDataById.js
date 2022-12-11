import axios from "axios";
import {isCheckbox} from "./isCheckbox.js";
import {fetchDatas} from "./fetchDatas.js";

export const deleteDataByID = ({setDatas, pageNumber}) => {
    let arrayIds =  isCheckbox()

    arrayIds.forEach(id =>{
        axios.delete(`http://localhost:8888/api/index.php/${id}`)
            .then(function(response){
                const url= `http://localhost:8888/api/index.php?currentPage=${pageNumber}`
                fetchDatas (setDatas,url);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}
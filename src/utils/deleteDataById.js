import axios from "axios";
import {isCheckbox} from "./isCheckbox.js";

export const deleteDataByID = () => {
    let arrayIds =  isCheckbox()

    arrayIds.forEach(id =>{
        /*axios.delete(`http://localhost:8888/api/index.php/${id}`)
            .then(function(response){
                console.log(response.data);
            })*/
        console.log(arrayIds)
        console.log('the array has been deleted' + arrayIds)
    })
}
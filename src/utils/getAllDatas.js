import axios from "axios"

export const getAllDatas = (setDatas) =>{
    // Make a request for a user with a given ID
    axios.get('http://localhost:8888/api/cat')
    .then(function (response) {
        // handle success
        console.log(response.data);
        setDatas(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}
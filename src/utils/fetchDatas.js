import axios from "axios"

export const fetchDatas = (setDatas, url) =>{
    // Make a request for a user with a given ID
    axios.get(url)
    .then(function (response) {
        // handle success
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

import axios from "axios";
import {isCheckbox} from "./isCheckbox.js";
import {fetchDatas} from "./fetchDatas.js";

export const deleteDataByID = async ({setDatas, pageNumber}, e) => {
    e.preventDefault();
    try {
        // Get the IDs of the items to be deleted
        const arrayIds = isCheckbox();

        // Delete each item
        for (const id of arrayIds) {
            await axios.delete(`/api/index.php/${id}`);
        }

        // Fetch updated data from the API
        const url = `/api/index.php?currentPage=${pageNumber}`;
        fetchDatas(setDatas, url);
    } catch (error) {
        // Display an error message to the user
        console.error(error);
        alert("An error occurred while deleting the data. Please try again.");
    }
};
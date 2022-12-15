import last from "../../../../public/assets/last.png"
import first from "../../../../public/assets/first.png"
import next from "../../../../public/assets/next.png"
import back from "../../../../public/assets/back.png"
import {useEffect, useState} from "react";
import {PaginationButton} from "../../buttons/PaginationButton.jsx";
import {fetchDatas} from "../../../utils/fetchDatas.js";
import axios from "axios";
import {port, setUrlAllDatas, setUrlCurrentPage} from "../../../../setUrl.js";


export const ModalFooter = ({pageNumber, setPageNumber, setDatas, setDeleteButton}) =>{
    const[lastPage, setLastPageIndex] = useState()


    useEffect(() => {
        const url= setUrlAllDatas(port);
        axios.get(url)
            .then(function (response) {
                const result = response.data
                const totalPages = (result[0].nb_plat)
                let lastPageIndex = (Math.ceil(totalPages/10));
                setLastPageIndex(lastPageIndex)
            })
            .catch(function (error) {
                console.error(error);
            });
    });


    const setLastPage = () =>{
        setPageNumber(lastPage);
        const url= setUrlCurrentPage(port, lastPage);
        fetchDatas (setDatas,url);
        setDeleteButton('hidden')}


    const setNextPage = () =>{
        if(pageNumber !== lastPage){
            const updatedPageNumber = pageNumber + 1
            setPageNumber(updatedPageNumber)
            const url= setUrlCurrentPage(port, updatedPageNumber);
            fetchDatas (setDatas,url);
            setDeleteButton('hidden');}
    }

    const setPreviousPage = () =>{
        if (pageNumber !== 1) {
            const updatedPageNumber = pageNumber - 1
            setPageNumber(updatedPageNumber)
            const url = setUrlCurrentPage(port, updatedPageNumber);
            fetchDatas(setDatas, url)
            setDeleteButton('hidden');
        }
    }

    const setFirstPage = () =>{
        setPageNumber(1)
        const url= setUrlCurrentPage(port, 1);
        fetchDatas (setDatas,url)
        setDeleteButton('hidden');
    }



    return <footer className="w-full bg-light-grey h-14 px-4 flex justify-end items-center">
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center">
                <li>
                    <PaginationButton name={"first"}
                                      image={first}
                                      rounded={'rounded-l-lg'}
                                      onClickAction={()=>setFirstPage()}/>
                </li>

                <li>
                    <PaginationButton name={"back"}
                                      image={back}
                                      onClickAction={()=>setPreviousPage()}/>
                </li>

                <li className="text-center py-2 w-10 leading-tight text-white bg-light-blue border-2 border-light-blue ">{pageNumber}</li>

                <li>
                    <PaginationButton name={"next"}
                                      image={next}
                                      onClickAction={()=>setNextPage()}/>
                </li>

                <li>
                    <PaginationButton name={"last"}
                                      image={last}
                                      rounded={'rounded-r-lg'}
                                      onClickAction={()=>setLastPage()}/>
                </li>

            </ul>
        </nav>
    </footer>
}
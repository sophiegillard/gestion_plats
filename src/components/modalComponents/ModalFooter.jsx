import last from "../../../public/assets/last.png"
import first from "../../../public/assets/first.png"
import next from "../../../public/assets/next.png"
import back from "../../../public/assets/back.png"
import {useState} from "react";
import {PaginationButton} from "../buttons/PaginationButton.jsx";


export const ModalFooter = ({pageNumber, setPageNumber}) =>{

    const nextPage = () =>{setPageNumber(pageNumber+1)}
    const previousPage = () =>{pageNumber != 1 && setPageNumber(pageNumber - 1)}
    const firstPage = () =>{setPageNumber(1)}
    const lastPage = () =>{
        let allRows = document.querySelectorAll('.row-content').length
        let lastPageIndex = Math.round(allRows/10)
        setPageNumber(lastPageIndex)
    }

    return <div className="w-full bg-light-grey h-14 px-4 flex justify-end items-center">
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center">
                <li>
                    <PaginationButton name={"first"} image={first} rounded={'rounded-l-lg'} onClickAction={()=>firstPage()}/>
                </li>

                <li>
                    <PaginationButton name={"back"} image={back} onClickAction={()=>previousPage()}/>
                </li>

                <li className="px-4 py-2 leading-tight text-white bg-light-blue border-2 border-light-blue ">{pageNumber}</li>

                <li>
                    <PaginationButton name={"next"} image={next} onClickAction={()=>nextPage()}/>
                </li>

                <li>
                    <PaginationButton name={"last"} image={last} rounded={'rounded-r-lg'} onClickAction={()=>lastPage()}/>
                </li>

            </ul>
        </nav>
    </div>
}
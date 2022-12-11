export const isCheckbox = () => {
    let arrayIds = [];
    let allRows = document.querySelectorAll('.row-content')
    allRows.forEach(row =>{
        if (row.firstChild.firstChild.checked){
            arrayIds.push(row.id)
        }
    })
    return arrayIds;
}
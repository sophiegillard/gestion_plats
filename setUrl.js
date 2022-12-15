export const port = '8888';

export const setUrlCurrentPage = (port, pageNumber) => {
    return `http://localhost:${port}/api/index.php?currentPage=${pageNumber}`;
}

export const setUrlIndex = (port) => {
    return `http://localhost:${port}/api/index.php`;
}

export const setUrlCategory = (port) => {
    return `http://localhost:${port}/api/category.php`;
}

export const setUrlFournisseur = (port) => {
    return `http://localhost:${port}/api/fournisseur.php`;
}

export const setUrlAllDatas = (port) => {
    return `http://localhost:${port}/api/allDatas.php`;
}

export const setUrlId = (port, id) => {
    return `http://localhost:${port}/api/index.php/${id}`;
}

export const setUrlIdUpdate = (port, id) => {
    return `http://localhost:${port}/api/index.php/${id}/update`;
}








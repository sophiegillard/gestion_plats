export const updateDish = (setDatas, datas, id, updated) => {
    datas.map((item) => item.id === id ? updated : item)}
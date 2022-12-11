export const handleCheckboxChange = (setDatas, datas, id) => {
    setDatas((datas) =>
        datas.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item
        }),
    );
};
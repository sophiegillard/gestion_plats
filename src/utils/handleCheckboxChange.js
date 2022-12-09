export const handleCheckboxChange = (setDatas, datas, id) => {
    setDatas((datas) =>
        datas.map((item) => {
            if (item.id === id) {
                console.log(item, item.checked)
                return { ...item, checked: !item.checked };
            }
            return item
        }),
    );
};
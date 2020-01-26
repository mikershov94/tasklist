const dateToAttr = (date) => {
    const day = (date.getDate()) < 10 ? '0' + String(date.getDate()) : String(date.getDate());
    const month = (date.getMonth() + 1) < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
    
    const dateStr = String(date.getFullYear()) + '-' + month + '-' + day;

    return dateStr;
};

export default dateToAttr;
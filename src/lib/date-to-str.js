const dateToStr = (date) => {
    const day = (date.getDate()) < 10 ? '0' + String(date.getDate()) : String(date.getDate());
    const month = (date.getMonth() + 1) < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
    const dateStr = day + '.' + month + '.' + String(date.getFullYear());
    return dateStr;
};

export default dateToStr;
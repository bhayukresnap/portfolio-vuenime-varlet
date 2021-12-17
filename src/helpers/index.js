export const sortBy = (arr, target) => {
    if (!Array.isArray(arr)) return arr;
    return arr.sort(function(a, b) {
        return (a[target] > b[target]) ? 1 : (a[target] < b[target]) ? -1 : 0;
    });
}

export const sortByDesc = (arr, target) => {
    if (!Array.isArray(arr)) return arr;
    return arr.sort(function(a, b) {
        return (a[target] > b[target]) ? -1 : (a[target] < b[target]) ? 1 : 0;
    });
}

export const getToday = () => {
    const today = new Date;
    return today.toLocaleString('en-us', { weekday: 'long' });
};

export const formatPrice = (value) => {
    let val = (value / 1).toFixed(0).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
export const updatedObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    };
};

export const updatedArray = (oldArray, updatedElement) => {
    return [...oldArray, updatedElement];
}

export const getDate = () => {
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthIndex = new Date().getMonth();
    let month = monthArr[monthIndex];
    let today = `${new Date().getDate()} ${month}, ${new Date().getHours()} : ${fixedMinute(new Date().getMinutes())}`;
    return today;
}

export const fixedMinute = min => {
    if (min < 10) {
        min = '0' + 1;
    }
    return min;
}
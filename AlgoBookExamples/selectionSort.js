let testList = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7];

const findSmallest = (arr) => {
    let length = arr.length;
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    let length = arr.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr;
}

console.log(testList, selectionSort(testList))
function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return result.concat(left).concat(right)
}

function margeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(margeSort(left), margeSort(right))
}

let arr = [1, 4, 6, 3, 4, 5]
console.log(margeSort(arr))
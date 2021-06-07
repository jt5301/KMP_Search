////1089. Duplicate Zeros

////Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

////Note that elements beyond the length of the original array are not written.

////Do the above modifications to the input array in place, do not return anything from your function.



////Example 1:

////Input: [1, 0, 2, 3, 0, 4, 5, 0]
////Output: null
////Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]

var duplicateZeros = function (array) {
    let placeholder = Infinity
    let ogLength = array.length
    let shiftAmt = 0
    for (let i = 0; i < ogLength; i++) {
        if (array[i] == 0) {
            array.push(null)
            shiftAmt += 1
        }
    }
    if (shiftAmt === 0) return array
    for (let i = ogLength - 1; i >= 0; i--) {
        if (array[i] == 0) {
            array[i + shiftAmt] = 0
            array[i + shiftAmt - 1] = 0
            shiftAmt -= 1
        }
        else {
            array[i + shiftAmt] = array[i]
        }
    }
    array.splice(ogLength)
};


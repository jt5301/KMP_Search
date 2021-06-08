////1304. Find N Unique Integers Sum up to Zero
////Input: n = 5
////Output: [-7, -1, 1, 3, 4]
////Explanation: These arrays also are accepted[-5, -1, 1, 2, 3], [-3, -1, 2, -2, 4].

var sumZero = function (n) {
    let lastUnique = 0
    let returnArray = []
    if (n === 2) {
        return [1, -1]
    }
    for (let i = 0; i < n - 1; i++) {
        returnArray.push(i)
        lastUnique += i
    }
    returnArray.push(lastUnique * -1)
    return returnArray
};
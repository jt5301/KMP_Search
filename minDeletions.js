////1647. Minimum Deletions to Make Character Frequencies Unique

////A string s is called good if there are no two different characters in s that have the same frequency.

////Given a string s, return the minimum number of characters you need to delete to make s good.

////The frequency of a character in a string is the number of times it appears in the string.For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.



////Example 1:

////Input: s = "aab"
////Output: 0
////Explanation: s is already good.
////    Example 2:

////Input: s = "aaabbbcc"
////Output: 2
////Explanation: You can delete two 'b's resulting in the good string "aaabcc".
////Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".


var minDeletions = function (s) {
    const letterHash = {}
    for(let i = 0;i<s.length;i++){
        if(!letterHash[s[i]])letterHash[s[i]] = 1
        else letterHash[s[i]]+=1
    }
    let freqs = Object.values(letterHash)
    let count = 0
    const freqHash = {}
    for(let i = 0;i<freqs.length;i++){
        if(!freqHash[freqs[i]])freqHash[freqs[i]] = true
        else{
            let k = freqs[i]
            while(freqHash[k]){
                if(k ===0)break
                k -=1
                count+=1
            }
            freqHash[k] = true
        }
    }
    return count
};

var minDeletions = function (s) {
    let minRemoves = 0
    const letterHash = {}
    for (let i = 0; i < s.length; i++) {
        if (!letterHash[s[i]]) letterHash[s[i]] = 1
        else letterHash[s[i]] += 1
    }
    let freqs = Object.values(letterHash)
    const freqsHash = {}
    for (let i = 0; i < freqs.length; i++) {
        if (!freqsHash[freqs[i]]) freqsHash[freqs[i]] = true
        else {
            while (freqsHash[freqs[i]] && freqs[i] != 0) {
                freqs[i] -= 1
                minRemoves += 1
            }
            freqsHash[freqs[i]] = true
        }
    }
    return minRemoves
};

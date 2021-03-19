/*
395. Longest Substring with At Least K Repeating Characters

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.
*/

var longestSubstring = function(s, k) {
    return helper(s,k)
};

function helper(s,k){
    if(s.length < k) return 0
    let countMap = {}
    for(let letter of s){
        if(!countMap[letter])countMap[letter] = 1
        else countMap[letter]+=1
    }
    for(let i = 0;i<s.length;i++){
        if(countMap[s[i]] < k){
            return Math.max(helper(s.slice(0,i),k),helper(s.slice(i+1),k))
        }
    }
    return s.length
}

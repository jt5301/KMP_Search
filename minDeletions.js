var minDeletions = function(s) {
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

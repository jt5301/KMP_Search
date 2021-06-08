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

var minDeletions = function (s) {
    let minRemoves = 0
    const letterHash = {}
    for (let i = 0; i < s.length; i++) {
        if (!letterHash[s[i]]) letterHash[s[i]] = 1
        else letterHash[s[i]] += 1
    }
    let freqs = Object.values(letterHash)
    freqs = freqs.sort((a, b) => {
        return a - b
    })
    const freqsHash = {}
    for (let i = 0; i < freqs.length; i++) {
        if (!freqsHash[freqs[i]]) {
            freqsHash[freqs[i]] = true
        }
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

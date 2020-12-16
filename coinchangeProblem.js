
//Coin change problem. Completely misread, but should answer: If given an option of 3 coins: 1,2,5, how many coins
//will it take to make up the amount given?
var coinChange = function (amount) {
  if (amount < 0) return -1;
  let numOfCoins = 0;
  while (amount > 0) {
    if (isInteger(amount % 5)) {
      numOfCoins += amount / 5;
    } else if (isInteger(amount % 2)) {
      numOfCoins += amount / 2;
    } else {
      amount -= 1;
      numOfCoins += 1;
    }
  }
  return numOfCoins;
};

//coin change problem: min number to make amount

var coinChange = function (coins, amount) {
  let minArray = [0];
  for (let i = 0; i < amount; i++) {
    minArray.push(Infinity);
  }
  for (let i = 0; i < coins.length; i++) {
    for (let k = 1; k < minArray.length; k++) {
      if (coins[i] <= k) {
        minArray[k] = Math.min(minArray[k], minArray[k - coins[i]] + 1);
      }
    }
  }
  if (minArray[amount] === Infinity) return -1;
  return minArray[amount];
};


//Redoing coinchange to practice bottom up

var coinChange = function (coins, amount) {
  let tab = new Array(amount + 1).fill(Infinity)
  tab[0] = 0
  for (let i = 1; i < tab.length; i++) {
    for (let k = 0; k < coins.length; k++) {
      let amountLeft = i - coins[k]
      if (amountLeft >= 0 && tab[amountLeft] != Infinity) {
        tab[i] = Math.min(tab[i], tab[amountLeft] + 1)
      }
    }
  }
  if (tab[tab.length - 1] === Infinity) return -1
  return tab[tab.length - 1]
};

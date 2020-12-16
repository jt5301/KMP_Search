

/*You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.
As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins. */

function possibleSums(coins, quantity) {
  let quantCounter = 0
  let hashSet = new Set()
  let currentCoinInd = 0
  while (currentCoinInd < coins.length) {
    if (quantCounter < quantity[currentCoinInd]) {
      if (hashSet.size == 0) {
        hashSet.add(coins[currentCoinInd])
      }
      else {
        let toAdd = []
        hashSet.forEach((current) => {
          toAdd.push(coins[currentCoinInd] + current)
        })
        toAdd.forEach((current) => {
          hashSet.add(current)
        })
        if (!hashSet.has(coins[currentCoinInd])) hashSet.add(coins[currentCoinInd])
      }
      quantCounter += 1
      continue
    }
    currentCoinInd += 1
    quantCounter = 0
  }
  return hashSet.size
}

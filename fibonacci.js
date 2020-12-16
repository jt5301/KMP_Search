//fibonacci w memoization
var fib = function (n) {
  const memo = {}
  function fibHelper(n) {
    if (memo[n]) return memo[n]
    if (n <= 1) memo[n] = n
    else memo[n] = (fibHelper(n - 1) + fibHelper(n - 2))
    return memo[n]
  }
  fibHelper(n)
  if (n <= 1) return n
  return memo[n - 2] + memo[n - 1]
};

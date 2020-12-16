// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
//stack Q
var asteroidCollision = function (asteroids) {
  debugger
  let returnAsteroids = [asteroids[0]]
  for (let i = 1; i < asteroids.length; i++) {
    if (returnAsteroids[returnAsteroids.length - 1] > 0 && asteroids[i] < 0) {
      while (returnAsteroids.length >= 0) {
        if (returnAsteroids[returnAsteroids.length - 1] < 0) {
          returnAsteroids.push(asteroids[i])
          break
        }
        if (asteroids[i] * -1 === returnAsteroids[returnAsteroids.length - 1]) {
          returnAsteroids.pop()
          break
        }
        if (asteroids[i] * -1 > returnAsteroids[returnAsteroids.length - 1]) {
          returnAsteroids.pop()
        }
        else {
          if (returnAsteroids.length === 0) {
            returnAsteroids.push(asteroids[i])
            break
          }
          break
        }
      }
    }
    else {
      returnAsteroids.push(asteroids[i])
    }
  }
  return returnAsteroids
};

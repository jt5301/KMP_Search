// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

//brute force
var maxArea = function (height) {
  let currentHighest = 0;

  for (let i = 0; i < height.length; i++) {
    for (let k = i + 1; k < height.length; k++) {
      let lowest = Math.min(height[i], height[k]);
      let tempHighest = lowest * (k - i);
      currentHighest = Math.max(currentHighest, tempHighest);
    }
  }
  return currentHighest;
};
//w pointers

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;

  while (left < right) {
    let smallest = Math.min(height[left], height[right]);
    let tempHeight = smallest * (right - left);
    mostWater = Math.max(mostWater, tempHeight);
    if (smallest === height[left]) left += 1;
    else {
      if (smallest === height[right]) right -= 1;
      else {
        if (height[right] === height[left]) left += 1;
      }
    }
  }
  return mostWater;
};

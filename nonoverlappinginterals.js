// 435. Non-overlapping Intervals

// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

var eraseOverlapIntervals = function(intervals) {
  // Sort by smallest first number, then sort by largest second number. Remove based on both those array configs.
  intervals.sort((a,b)=>{
      return a[0] - b[0]
  })
  let copyInterval = [...intervals]
  copyInterval.sort((a,b)=>{
      return a[1]-b[1]
  })
  let pointer = 0
  let auxPointer = 1
  let removeFront = 0
  while(auxPointer < copyInterval.length){
      if(copyInterval[auxPointer][0] < copyInterval[pointer][1]){
          removeFront+=1
      }
      else pointer = auxPointer
      auxPointer+=1
  }
  pointer = 0
  auxPointer = 1
  let removeBack = 0
  while(auxPointer < intervals.length){
      if(intervals[auxPointer][0] < intervals[pointer][1]){
          removeBack+=1
      }
      else{
          pointer = auxPointer
      }
      auxPointer+=1
  }
  return Math.min(removeBack,removeFront)
};

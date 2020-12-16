
// We are given a list  schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping  Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for  all  employees, also in sorted order.

const freeTime = (schedules) => {
  let flattened = schedules.flat()
  flattened.sort((a, b) => { return a[0] - b[0] })
  let mergedSchedules = [flattened[0]]
  for (let i = 1; i < flattened.length; i++) {
    let latestInMerged = mergedSchedules[mergedSchedules.length - 1]
    if (flattened[i][0] >= latestInMerged[0] && flattened[i][0] <= latestInMerged[1]) {
      mergedSchedules[mergedSchedules.length - 1][1] = Math.max(mergedSchedules[mergedSchedules.length - 1][1], flattened[i][1])
    }
    else mergedSchedules.push(flattened[i])
  }
  const freeTimes = []
  if (mergedSchedules.length <= 1) return mergedSchedules
  for (let i = 0; i < mergedSchedules.length - 1; i++) {
    freeTimes.push([mergedSchedules[i][1], mergedSchedules[i + 1][0]])
  }
  return freeTimes
}

freeTime([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]])


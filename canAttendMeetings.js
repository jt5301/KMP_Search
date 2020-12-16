

// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = (meetings) => {
  meetings.sort((a, b) => {
    return a[0] - b[0]
  })
  for (let i = 1; i < meetings.length; i++) {
    let startTime = meetings[i][0]
    if (startTime >= meetings[i - 1][0] && startTime <= meetings[i - 1][1]) return false
    else continue
  }
  return true
}

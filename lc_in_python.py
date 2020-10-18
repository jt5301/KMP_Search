# twoSum
def twoSum(nums, target):
    numList = {}
    i = 0
    for num in nums:
        current = nums[i]
        found = target-current
        if found in numList:
            if numList[found] == 0:
                return [numList[found], i]
            return [numList[found], i]
        else:
            numList[current] = i
            i += 1


# An array is monotonic if it is either monotone increasing or monotone decreasing.
# An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
# Return true if and only if the given array A is monotonic.

class Solution(object):
    def isMonotonic(self, A):
        if len(A) == 1:
            return True
        counter = 1
        direction = A[0]-A[len(A)-1]
        print(direction)
        if A[0] <= A[len(A)-1]:
            for num in A:
                if num <= A[counter]:
                    if counter == len(A)-1:
                        return True
                    else:
                        counter += 1
                        continue
                else:
                    return False
        else:
            for num in A:
                if num >= A[counter]:
                    if counter == len(A)-1:
                        return True
                    else:
                        counter += 1
                        continue
                else:
                    return False

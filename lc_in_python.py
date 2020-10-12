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

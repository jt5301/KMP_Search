/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

public class Solution {
    public int MissingNumber(int[] nums) {
        Hashtable hash = new Hashtable();
        foreach(int num in nums){
            hash.Add(num, true);
        }
        for(int num = 0;num < nums.Length;num++){
            if(!hash.Contains(num)){
                return num;
            }
        }
        return nums.Length;
        
    }
}

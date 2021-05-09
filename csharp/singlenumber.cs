/*
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:

Input: nums = [2,2,1]
Output: 1
*/

public class Solution {
    public int SingleNumber(int[] nums) {
        Dictionary<int, int> hash = new Dictionary<int,int>();
        foreach(int num in nums){
            if(!hash.ContainsKey(num))hash.Add(num, 1);
            else hash[num]+=1;
        }
        foreach(KeyValuePair<int,int> kvp in hash){
            if(kvp.Value ==1)return kvp.Key;
        }
        return 0;
    }
    
}

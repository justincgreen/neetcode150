class Solution {
  twoSum(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
      const equation = target - nums[i];
      if(map.has(equation)) {
        return [map.get(equation), i];
      }
      map.set(nums[i], i);
    }
    return false;
  }
}

const test = new Solution();

console.log(test.twoSum([3,4,5,6], 11));
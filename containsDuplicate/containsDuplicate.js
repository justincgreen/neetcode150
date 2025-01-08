class Solution {
  hasDuplicate(nums) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
      if(map.has(nums[i])) {
        return true;
      }
      map.set(nums[i], i);
    }
    return false;
  }
}

const test = new Solution();

console.log(test.hasDuplicate([1,2,1,4]));

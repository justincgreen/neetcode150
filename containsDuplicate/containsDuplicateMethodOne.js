// Uses a hash map for the solution
class Solution {
  hasDuplicate(nums) {
    const sorted = nums.toSorted();
    const map = new Map();
    for(let i = 0; i < sorted.length; i++) {
      if(map.has(sorted[i])) {
        return true;
      }
      map.set(sorted[i], i);
    }
    return false;
  }
}

const test = new Solution();

console.log(test.hasDuplicate([9,5,4,5]));
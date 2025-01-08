function twoSum(nums, target) {
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

console.log(twoSum([2,7,11,15], 18));
secondLargest = nums => {
  let max = nums[0];
  let second;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
    } else {
      if (nums[i] == max) {
      } else if (nums[i] > second) {
        second = nums[i];
      }
    }
  }
  return second;
};
console.log(secondLargest([2, 3, 8, 8, 7]));

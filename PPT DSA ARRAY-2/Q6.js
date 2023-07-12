function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Found the target, return its index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half, adjust the left pointer
    } else {
      right = mid - 1; // Target is in the left half, adjust the right pointer
    }
  }

  return -1; // Target not found in the array
}

// Example usage
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const index = search(nums, target);
console.log(index); // Output: 4
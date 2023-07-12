
function findLHS(nums) {
  const frequencyMap = new Map();
  let longestSubsequence = 0;

  // Count the frequency of each number in the array
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Iterate through each number in the array
  for (let num of nums) {
    // Check if there exists a number whose difference with num is 1
    if (frequencyMap.has(num + 1)) {
      const currentSubsequence =
        frequencyMap.get(num) + frequencyMap.get(num + 1);
      longestSubsequence = Math.max(longestSubsequence, currentSubsequence);
    }
  }

  return longestSubsequence;
}

// Example usage
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const longestSubsequenceLength = findLHS(nums);
console.log(longestSubsequenceLength); // Output: 5
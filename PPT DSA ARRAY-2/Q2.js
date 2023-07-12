function distributeCandies(candyType) {
  // Count the number of unique candy types
  const uniqueTypes = new Set(candyType);
  const maxTypes = candyType.length / 2;

  // Return the minimum of unique candy types and maxTypes
  return Math.min(uniqueTypes.size, maxTypes);
}

// Example usage
const candyType = [1, 1, 2, 2, 3, 3];
const maxDifferentTypes = distributeCandies(candyType);
console.log(maxDifferentTypes); // Output: 3
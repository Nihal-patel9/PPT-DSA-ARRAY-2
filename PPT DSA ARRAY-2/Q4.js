function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    // Check if the current plot and its adjacent plots are empty
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // Plant a flower in the current plot
      count++; // Increment the count of planted flowers

      if (count >= n) {
        return true; // Enough flowers have been planted
      }
    }

    i++; // Move to the next plot
  }

  return false; // Not enough flowers can be planted
}

// Example usage
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const canPlant = canPlaceFlowers(flowerbed, n);
console.log(canPlant); // Output: true
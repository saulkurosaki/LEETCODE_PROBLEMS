// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

//* ALGORITMO: Rotación in-place usando tres reversas (Espacio O(1), tiempo O(n))

function rotate(nums, k) {
  const n = nums.length;
  k %= n; // Asegurar que k no sea mayor que el tamaño de nums

  // Función para invertir una sección del array
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Paso 1: Invertir todo el array
  reverse(0, n - 1);
  // Paso 2: Invertir los primeros k elementos
  reverse(0, k - 1);
  // Paso 3: Invertir los últimos n-k elementos
  reverse(k, n - 1);
}

// Este es el método más eficiente y no utiliza espacio adicional. Dividimos el problema en tres pasos de inversión de subarrays.

// Pasos:

// 	1.	Revertir todo el array.
// 	2.	Revertir los primeros k elementos.
// 	3.	Revertir los n - k elementos restantes.

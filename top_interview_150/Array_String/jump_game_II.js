// 45. Jump Game II

// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

function jump(nums) {
  let jumps = 0; // Número de saltos necesarios
  let currentEnd = 0; // Alcance actual con los saltos hechos
  let farthest = 0; // Alcance más lejano que podemos lograr

  for (let i = 0; i < nums.length - 1; i++) {
    // Actualizamos el alcance más lejano
    farthest = Math.max(farthest, i + nums[i]);

    // Si alcanzamos el final del alcance actual, hacemos un salto
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // Si el alcance actual ya cubre el último índice, terminamos
      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }

  return jumps;
}

// 1.	Variables principales:
// •	jumps: cuenta el número de saltos necesarios.
// •	currentEnd: el alcance más lejano que podemos alcanzar con los saltos actuales.
// •	farthest: el alcance más lejano que podemos lograr considerando los elementos del array.
// 2.	Proceso:
// •	Recorremos el array hasta el penúltimo índice (no necesitamos saltar desde el último).
// •	En cada posición, actualizamos farthest al índice más lejano alcanzable desde esa posición.
// •	Si llegamos al final del alcance actual (currentEnd), hacemos un salto y actualizamos currentEnd a farthest.
// •	Si currentEnd ya cubre el último índice, terminamos.

// Complejidad

// 	1.	Tiempo: O(n), ya que recorremos el array una sola vez.
// 	2.	Espacio: O(1), no usamos espacio adicional más allá de unas pocas variables.

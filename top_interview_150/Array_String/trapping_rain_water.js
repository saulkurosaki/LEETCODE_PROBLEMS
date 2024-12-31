// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

//* Algoritmo

// 	1.	Inicialización:
// 	•	Dos punteros, left al inicio del array y right al final.
// 	•	Dos variables, leftMax y rightMax, que almacenan las alturas máximas vistas desde la izquierda y la derecha, respectivamente.
// 	•	Una variable water para acumular el agua atrapada.
// 	2.	Movimiento de los punteros:
// 	•	Si la altura en left es menor que la de right:
// 	  •	Si la altura en left es mayor o igual a leftMax, actualiza leftMax.
// 	  •	Si no, suma la diferencia entre leftMax y height[left] al agua acumulada.
// 	  •	Incrementa left.
// 	•	Si la altura en right es menor o igual a la de left:
// 	  •	Si la altura en right es mayor o igual a rightMax, actualiza rightMax.
// 	  •	Si no, suma la diferencia entre rightMax y height[right] al agua acumulada.
// 	  •	Decrementa right.
// 	3.	Parada:
// 	•	El proceso continúa mientras left sea menor o igual a right.

//* Complejidad

// 	•	Tiempo:  O(n) , ya que cada índice se procesa una sola vez.
// 	•	Espacio:  O(1) , ya que no se usa espacio adicional proporcional al tamaño del array.

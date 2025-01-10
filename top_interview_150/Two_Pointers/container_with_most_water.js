// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

function maxArea(height) {
  let left = 0; // Puntero izquierdo
  let right = height.length - 1; // Puntero derecho
  let maxArea = 0;

  while (left < right) {
    // Calcular el área con las líneas actuales
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    // Mover el puntero con la altura menor
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

//* Algoritmo:
// 	1.	El área de agua entre dos líneas se calcula como:

//     area = min(alturaIzquierda, alturaDerecha) * (índiceDerecho - índiceIzquierdo)

// Donde:
// 	•	 alturaIzquierda  y  alturaDerecha  son las alturas de las líneas seleccionadas.
// 	•	 índiceDerecho - índiceIzquierdo  es la distancia entre las líneas.

// 	2.	Para maximizar el área, necesitamos encontrar una combinación óptima de distancia y altura.

// 	3.	Usaremos dos punteros:
// 	•	Uno al principio ( left ).
// 	•	Otro al final ( right ) del array.

// 	4.	Siempre movemos el puntero con la altura menor hacia adentro, ya que esa línea limita el área máxima que se puede formar con las demás.

//* Complejidad:
// 	•	Tiempo: O(n), donde n es la longitud del array. Los punteros se mueven como máximo n veces en total.
// 	•	Espacio: O(1), ya que no usamos estructuras de datos adicionales.

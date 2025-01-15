// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

var rotate = function (matrix) {
  const n = matrix.length;

  // Paso 1: Transponer la matriz
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Intercambiar elementos matrix[i][j] y matrix[j][i]
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Paso 2: Invertir cada fila
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

//* Enfoque:
//  1.	Transponer la matriz: Convertimos las filas en columnas.
// 	2.	Invertir cada fila: Invertimos el orden de los elementos en cada fila.

//* Complejidad:
// 	•	Tiempo: O(n^2), ya que recorremos todos los elementos de la matriz durante la transposición y la inversión.
// 	•	Espacio: O(1), ya que la rotación se realiza in-place sin usar estructuras de datos auxiliares.

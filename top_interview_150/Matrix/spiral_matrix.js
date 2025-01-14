// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

var spiralOrder = function (matrix) {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Recorrer de izquierda a derecha
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Reducir el límite superior

    // Recorrer de arriba a abajo
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Reducir el límite derecho

    // Verificar si todavía hay filas y columnas por recorrer
    if (top <= bottom) {
      // Recorrer de derecha a izquierda
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Reducir el límite inferior
    }

    if (left <= right) {
      // Recorrer de abajo hacia arriba
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Reducir el límite izquierdo
    }
  }

  return result;
};

//* Explicación del Código:
// 	1.	Inicializar los límites:
// 	•	top: Límite superior, comienza en 0.
// 	•	bottom: Límite inferior, comienza en el índice de la última fila.
// 	•	left: Límite izquierdo, comienza en 0.
// 	•	right: Límite derecho, comienza en el índice de la última columna.
// 	2.	Recorrer en espiral:
// 	•	Izquierda a derecha: Agregamos los elementos de la fila top desde left hasta right.
// 	•	Arriba a abajo: Agregamos los elementos de la columna right desde top hasta bottom.
// 	•	Derecha a izquierda (si queda fila): Agregamos los elementos de la fila bottom desde right hasta left.
// 	•	Abajo a arriba (si queda columna): Agregamos los elementos de la columna left desde bottom hasta top.
// 	3.	Actualizar los límites:
// 	•	Después de cada recorrido, ajustamos los límites correspondientes (top, bottom, left, right) para evitar procesar nuevamente las filas y columnas ya visitadas.
// 	4.	Condiciones de parada:
// 	•	El bucle se detiene cuando top > bottom o left > right.

//* Complejidad:
// 	•	Tiempo: O(m * n), donde m es el número de filas y n es el número de columnas, porque visitamos cada elemento una vez.
// 	•	Espacio: O(1) adicional, ya que no utilizamos estructuras auxiliares significativas (solo el arreglo result para almacenar los resultados).

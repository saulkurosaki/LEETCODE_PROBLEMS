// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  // Paso 1: Verifica si la primera fila o columna debe ser cero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Paso 2: Usa la primera fila y columna como marcadores
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Paso 3: Establece las filas y columnas en ceros usando los marcadores
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Paso 4: Establece la primera fila en ceros si es necesario
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Paso 5: Establece la primera columna en ceros si es necesario
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
};

//* Estrategia:
// 	1.	Usa la primera fila y la primera columna como marcadores para indicar si la fila o la columna correspondiente debe ser establecida en ceros.
// 	2.	Identifica si la primera fila y la primera columna deben ser establecidas en ceros, ya que estas serán utilizadas como marcadores.
// 	3.	Recorre la matriz marcando las filas y columnas que deben ser llenadas con ceros en la primera fila y la primera columna.
// 	4.	Establece las filas y columnas en ceros según los marcadores.
// 	5.	Finalmente, establece en ceros la primera fila o la primera columna si es necesario.

//* Explicación:
// Paso 1:

// Verificamos si la primera fila o la primera columna contienen ceros. Esto es necesario porque estas serán utilizadas como marcadores y su información podría perderse si no se maneja correctamente.

// Paso 2:

// Recorremos la matriz, comenzando desde la segunda fila y la segunda columna. Cuando encontramos un 0, marcamos la fila y la columna correspondiente estableciendo la celda en la primera fila o columna en 0.

// Paso 3:

// Usamos los marcadores establecidos en la primera fila y la primera columna para llenar las filas y columnas correspondientes con ceros.

// Paso 4 y 5:

// Finalmente, si originalmente la primera fila o la primera columna debía ser establecida en ceros, lo hacemos ahora.

//* Complejidad:
// 	•	Tiempo: O(m \times n), ya que recorremos toda la matriz varias veces.
// 	•	Espacio: O(1), ya que no utilizamos estructuras de datos adicionales, solo modificamos la matriz en su lugar.

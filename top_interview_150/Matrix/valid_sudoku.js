// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function (board) {
  // Creación de estructuras para rastrear valores únicos en filas, columnas y sub-cuadros
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  // Iteramos sobre cada celda del tablero
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];

      // Ignorar celdas vacías (".")
      if (value === ".") continue;

      // Determinar el índice del sub-cuadro correspondiente
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Verificar si el valor ya existe en la fila, columna o sub-cuadro
      if (
        rows[i].has(value) ||
        cols[j].has(value) ||
        boxes[boxIndex].has(value)
      ) {
        return false;
      }

      // Agregar el valor a las estructuras correspondientes
      rows[i].add(value);
      cols[j].add(value);
      boxes[boxIndex].add(value);
    }
  }

  // Si no se detectaron conflictos, el tablero es válido
  return true;
};

//* Explicación del Código:
// 	1.	Estructuras para las filas, columnas y sub-cuadros:
// Creamos tres arrays de 9 elementos cada uno, donde cada elemento es un Set que almacenará los valores únicos encontrados en la fila, columna o sub-cuadro correspondiente.
// 	2.	Iteración sobre el tablero:
// Recorremos todas las celdas del tablero usando dos bucles for anidados (uno para las filas i y otro para las columnas j).
// 	3.	Ignorar celdas vacías:
// Si la celda contiene un ".", la ignoramos porque no afecta la validez del tablero.
// 	4.	Cálculo del índice del sub-cuadro:
// Para determinar a qué sub-cuadro pertenece la celda actual, usamos la fórmula:
//     const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//     5.	Verificación de duplicados:
// 	•	Si el valor ya está presente en el conjunto correspondiente de la fila, columna o sub-cuadro, devolvemos false inmediatamente.
// 	6.	Agregar el valor a los conjuntos:
// Si no hay duplicados, añadimos el valor actual al conjunto correspondiente de la fila, columna y sub-cuadro.
// 	7.	Devolución del resultado:
// Si completamos el bucle sin encontrar conflictos, devolvemos true, indicando que el tablero es válido.

//* Complejidad:
// 	•	Tiempo: O(9x9) = O(81) → Constante, ya que el tamaño del tablero siempre es fijo.
// 	•	Espacio: O(27) → Tres arrays de 9 elementos (uno para filas, otro para columnas y otro para sub-cuadros), cada uno con un conjunto.

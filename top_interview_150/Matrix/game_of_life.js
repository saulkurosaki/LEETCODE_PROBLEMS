// 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

// Given the current state of the board, update the board to reflect its next state.

// Note that you do not need to return anything.

// Example 1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  // Función para contar los vecinos vivos de una celda
  const countLiveNeighbors = (r, c) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Ignorar la celda actual
        const nr = r + i;
        const nc = c + j;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          (board[nr][nc] === 1 || board[nr][nc] === 2)
        ) {
          count++;
        }
      }
    }
    return count;
  };

  // Primera pasada: Calcula los nuevos estados usando los valores intermedios
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const liveNeighbors = countLiveNeighbors(r, c);

      if (board[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[r][c] = 2; // Célula viva que muere
      } else if (board[r][c] === 0 && liveNeighbors === 3) {
        board[r][c] = 3; // Célula muerta que revive
      }
    }
  }

  // Segunda pasada: Actualiza los valores intermedios a los finales
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 2) {
        board[r][c] = 0; // Célula que muere
      } else if (board[r][c] === 3) {
        board[r][c] = 1; // Célula que revive
      }
    }
  }
};

//* Estrategia para una solución in-place
// Dado que las transiciones de estado deben ocurrir simultáneamente, necesitamos representar los estados intermedios sin sobrescribir los valores originales de las celdas. Usaremos los siguientes valores para representar los estados:
// 	•	0: Célula muerta en el estado actual que permanecerá muerta.
// 	•	1: Célula viva en el estado actual que permanecerá viva.
// 	•	2: Célula viva en el estado actual que morirá en el próximo estado.
// 	•	3: Célula muerta en el estado actual que revivirá en el próximo estado.

// Después de determinar el próximo estado para cada celda, realizamos una segunda pasada para convertir los valores intermedios (2 y 3) a sus valores finales (0 y 1).

//* Explicación
// Paso 1: Contar vecinos vivos

// La función countLiveNeighbors recorre las 8 celdas vecinas alrededor de una celda dada y cuenta cuántas están vivas. Utilizamos los valores originales (1 y 2) para determinar si una celda estaba viva antes de las actualizaciones.

// Paso 2: Aplicar reglas y marcar transiciones

// Durante la primera pasada:
// 	•	Si una celda viva tiene menos de 2 o más de 3 vecinos vivos, se marca con 2 (morirá).
// 	•	Si una celda muerta tiene exactamente 3 vecinos vivos, se marca con 3 (revivirá).

// Paso 3: Actualizar los valores finales

// En la segunda pasada:
// 	•	Los valores intermedios 2 se convierten en 0 (células que mueren).
// 	•	Los valores intermedios 3 se convierten en 1 (células que reviven).

//* Complejidad
// 	•	Tiempo: O(m \times n), donde m y n son las dimensiones de la matriz, ya que recorremos todas las celdas dos veces (primera y segunda pasada).
// 	•	Espacio: O(1), ya que las actualizaciones se realizan in-place sin estructuras de datos adicionales.

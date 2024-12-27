// 6. Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

function convert(s, numRows) {
  // Caso base
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Crear un array para las filas
  const rows = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;

  // Simular el zigzag
  for (const char of s) {
    rows[currentRow] += char;
    // Cambiar dirección en los extremos
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    // Mover a la siguiente fila
    currentRow += goingDown ? 1 : -1;
  }

  // Unir todas las filas para generar el resultado final
  return rows.join("");
}

// Ejemplos
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"

//* Algoritmo

// 	•	Caso base: Si hay solo una fila o si el número de filas es mayor o igual a la longitud de la cadena, devolvemos la cadena tal cual.
// 	•	Array de filas: Se usa un array para representar cada fila en el zigzag.
// 	•	Simulación del zigzag: Se alterna entre “ir hacia abajo” y “hacia arriba” usando una bandera goingDown.
// 	•	Unión de filas: Al final, concatenamos las filas para generar la cadena de salida.

//* Complejidad

// 	•	Tiempo: O(n), donde n es la longitud de la cadena, ya que cada carácter se procesa una vez.
// 	•	Espacio: O(n) para almacenar las filas temporales.

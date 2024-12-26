// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

function lengthOfLastWord(s) {
  // Eliminar espacios iniciales y finales
  s = s.trim();

  // Encontrar el índice del último espacio
  const lastSpaceIndex = s.lastIndexOf(" ");

  // Si no hay espacios, la longitud es la longitud de toda la cadena
  if (lastSpaceIndex === -1) {
    return s.length;
  }

  // Calcular la longitud de la última palabra
  return s.length - lastSpaceIndex - 1;
}

//*   Explicación:

// Eliminar espacios iniciales y finales:

// Utilizamos el método trim() para eliminar los espacios en blanco al principio y al final de la cadena.
// Encontrar el índice del último espacio:

// Utilizamos el método lastIndexOf(' ') para encontrar el índice del último espacio en la cadena.
// Determinar la longitud de la última palabra:

// Si no se encuentra ningún espacio (lastSpaceIndex === -1), significa que la cadena consta de una sola palabra, por lo que devolvemos la longitud de toda la cadena.
// De lo contrario, la longitud de la última palabra es la longitud total de la cadena menos el índice del último espacio menos 1 (para excluir el espacio mismo).

// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Si encontramos un carácter repetido, encogemos la ventana desde la izquierda
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // Agregamos el carácter actual a la ventana
    charSet.add(s[right]);

    // Calculamos la longitud de la ventana
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

//* Explicación:
// 	1.	Variables:
// 	•	charSet: Un conjunto para rastrear los caracteres únicos en la ventana actual.
// 	•	left: El inicio de la ventana deslizante.
// 	•	maxLength: La longitud máxima del substring sin caracteres repetidos.
// 	2.	Bucle principal:
// 	•	Itera sobre cada carácter de la cadena con right como el final de la ventana.
// 	•	Si el carácter actual ya está en el conjunto (charSet), mueve el inicio de la ventana (left) hacia adelante y elimina caracteres hasta que el carácter actual sea único dentro de la ventana.
// 	3.	Actualizar maxLength:
// 	•	En cada iteración, calcula la longitud de la ventana como right - left + 1 y actualiza maxLength si esta longitud es mayor.

//* Complejidad:
// 	1.	Tiempo: O(n) - Cada carácter se procesa como máximo dos veces (al expandir y contraer la ventana).
// 	2.	Espacio: O(k), donde k es el tamaño del conjunto (charSet). En el peor caso, k = n, donde n es la longitud de la cadena si todos los caracteres son únicos.

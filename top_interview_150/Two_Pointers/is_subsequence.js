// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

function isSubsequence(s, t) {
  let sIndex = 0; // Puntero para la cadena `s`
  let tIndex = 0; // Puntero para la cadena `t`

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++; // Avanza en `s` si hay coincidencia
    }
    tIndex++; // Siempre avanza en `t`
  }

  // Si hemos recorrido completamente `s`, es una subsecuencia
  return sIndex === s.length;
}

//* Explicación
// 	1.	Uso de punteros:
// 	•	sIndex rastrea nuestra posición en la cadena s.
// 	•	tIndex rastrea nuestra posición en la cadena t.
// 	2.	Condición de avance:
// 	•	Si los caracteres s[sIndex] y t[tIndex] coinciden, avanzamos sIndex.
// 	•	Independientemente de si coinciden o no, siempre avanzamos tIndex.
// 	3.	Resultado final:
// 	•	Si recorremos completamente s (es decir, sIndex === s.length), entonces s es una subsecuencia de t.

//* Complejidad
// 	•	Tiempo: O(n), donde n es la longitud de t. Recorremos t completamente, mientras que avanzamos en s solo cuando hay coincidencias.
// 	•	Espacio: O(1), ya que no usamos estructuras adicionales.

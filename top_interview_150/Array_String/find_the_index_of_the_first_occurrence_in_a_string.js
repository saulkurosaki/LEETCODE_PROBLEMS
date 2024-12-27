// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

//* Solución simple en JavaScript

// Dado que el problema no especifica que optimicemos para tiempo o espacio, podemos usar el método incorporado de JavaScript para buscar una subcadena:

function strStr(haystack, needle) {
  // Si needle está vacío, retornar 0 (según especificaciones estándar)
  if (needle === "") return 0;

  // Utilizar indexOf para encontrar la primera aparición
  return haystack.indexOf(needle);
}

//* Explicación
// 	•	indexOf: Este método de JavaScript busca la primera aparición de una subcadena dentro de otra y devuelve el índice de inicio o -1 si no se encuentra.
// 	•	Es una solución eficiente para este caso, ya que internamente está optimizada en los motores modernos de JavaScript.

//* Solución manual (búsqueda simple)

// Si deseas implementarlo sin métodos incorporados, puedes usar una búsqueda deslizante:

function strStr(haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  // Si needle está vacío, retornar 0
  if (m === 0) return 0;

  // Recorrer haystack y verificar substrings
  for (let i = 0; i <= n - m; i++) {
    if (haystack.slice(i, i + m) === needle) {
      return i;
    }
  }

  // Si no se encuentra, retornar -1
  return -1;
}

//* Complejidad
// 	1.	Tiempo:
// 	•	Con indexOf: Depende de la implementación interna, pero en promedio O(n + m) para motores modernos.
// 	•	Con búsqueda manual: O(n \times m) en el peor caso.
// 	2.	Espacio:
// 	•	Ambas soluciones usan O(1) espacio adicional.

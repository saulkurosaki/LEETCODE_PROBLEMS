// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Reducir el prefijo si no coincide
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

//*   Explicación:

// Caso base: Si el arreglo de cadenas está vacío (strs.length === 0), no hay prefijo común, por lo que se devuelve una cadena vacía.
// Inicialización del prefijo: Se asume inicialmente que el primer elemento del arreglo (strs[0]) es el prefijo común.
// Búsqueda del prefijo común: Se itera a través del arreglo de cadenas a partir del segundo elemento (i = 1).
// En cada iteración, se verifica si el prefijo actual (prefix) se encuentra al principio de la cadena actual (strs[i]) utilizando strs[i].indexOf(prefix) !== 0.
// Si el prefijo no coincide con el inicio de la cadena actual:
// Se acorta el prefijo eliminando el último carácter utilizando prefix.slice(0, -1).
// Si el prefijo se reduce a una cadena vacía, significa que no hay prefijo común, por lo que se devuelve una cadena vacía.
// Retorno del prefijo: Después de iterar por todas las cadenas, se devuelve el prefijo común encontrado.

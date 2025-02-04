// 49. Group Anagrams

// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    // Ordena los caracteres de cada cadena
    const sorted = str.split("").sort().join("");

    // Agrupa las cadenas por su representación ordenada
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  // Retorna los valores agrupados como un arreglo
  return Array.from(map.values());
};

//* Explicación
// 	1.	Representación única para anagramas:
// 	•	Cada grupo de anagramas puede representarse por su versión “ordenada”. Por ejemplo:
// 	•	"eat", "tea", y "ate" → "aet"
// 	•	"tan" y "nat" → "ant"
// 	2.	Usar un Map:
// 	•	Usamos un Map para agrupar las cadenas que comparten la misma representación ordenada como clave.
// 	3.	Agrupación:
// 	•	Si la clave ordenada no existe en el Map, se inicializa un arreglo vacío.
// 	•	Se añade la cadena actual al arreglo correspondiente a su clave ordenada.
// 	4.	Retornar los grupos:
// 	•	Convertimos los valores del Map a un arreglo de arreglos.

//* Complejidad
// 	•	Tiempo: O(n \cdot k \log k)
// 	•	n: Número de cadenas en strs.
// 	•	k: Longitud promedio de las cadenas.
// 	•	El ordenamiento de cada cadena toma O(k \log k), y procesamos n cadenas.
// 	•	Espacio: O(n \cdot k)
// 	•	Para almacenar las cadenas agrupadas en el Map.

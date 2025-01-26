// 242. Valid Anagram

// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false; // Las longitudes deben ser iguales

  const countMap = new Map();

  // Contar la frecuencia de cada carácter en `s`
  for (const char of s) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  // Restar la frecuencia de cada carácter usando `t`
  for (const char of t) {
    if (!countMap.has(char)) return false; // Si `t` tiene un carácter que no está en `s`
    countMap.set(char, countMap.get(char) - 1);
    if (countMap.get(char) < 0) return false; // Si la frecuencia es negativa, no es anagrama
  }

  return true; // Si pasamos todas las verificaciones, es un anagrama
};

//* Explicación
// 	1.	Verificar las longitudes:
// 	•	Si las longitudes de s y t no coinciden, no pueden ser anagramas.
// 	2.	Mapeo de frecuencias:
// 	•	Usamos un Map para contar cuántas veces aparece cada carácter en s.
// 	3.	Validar con t:
// 	•	Iteramos sobre los caracteres de t:
// 	•	Si un carácter de t no está en el Map, t no puede ser un anagrama.
// 	•	Restamos 1 a la frecuencia del carácter en el Map.
// 	•	Si alguna frecuencia se vuelve negativa, significa que t tiene más de ese carácter de lo permitido.
// 	4.	Resultado:
// 	•	Si todas las frecuencias se ajustan correctamente, devolvemos true. Si encontramos algún problema durante las verificaciones, devolvemos false.

//* Complejidad
// 	•	Tiempo: O(n), donde n es la longitud de las cadenas, ya que recorremos ambas una sola vez.
// 	•	Espacio: O(u), donde u es el número de caracteres únicos en s (almacenados en el Map).

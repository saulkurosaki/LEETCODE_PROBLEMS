// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

var wordPattern = function (pattern, s) {
  const words = s.split(" "); // Dividir la cadena en palabras

  if (pattern.length !== words.length) return false; // Verificar tamaños

  const mapPatternToWord = new Map(); // Mapeo de patrón a palabras
  const mapWordToPattern = new Map(); // Mapeo de palabras a patrón

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Verificar consistencia del mapeo en ambas direcciones
    if (
      (mapPatternToWord.has(char) && mapPatternToWord.get(char) !== word) ||
      (mapWordToPattern.has(word) && mapWordToPattern.get(word) !== char)
    ) {
      return false;
    }

    // Registrar el mapeo
    mapPatternToWord.set(char, word);
    mapWordToPattern.set(word, char);
  }

  return true;
};

//* Explicación
// 	1.	Dividir la cadena s:
// 	•	Usamos split(' ') para dividir s en palabras basándonos en los espacios.
// 	2.	Verificar tamaños:
// 	•	Si la longitud de pattern y el número de palabras en s no coinciden, devolvemos false porque no puede haber una relación uno a uno.
// 	3.	Mapeos bidireccionales:
// 	•	mapPatternToWord: Mapea cada carácter en pattern a una palabra en s.
// 	•	mapWordToPattern: Mapea cada palabra en s a un carácter en pattern.
// 	4.	Iteración sobre el patrón y palabras:
// 	•	Verificamos si ya existe un mapeo para el carácter o la palabra.
// 	•	Si el mapeo existente no coincide con la palabra o carácter actual, devolvemos false.
// 	5.	Registrar mapeos:
// 	•	Si no hay conflictos, añadimos el par carácter-palabra y palabra-carácter a los respectivos mapas.
// 	6.	Resultado:
// 	•	Si completamos la iteración sin inconsistencias, devolvemos true.

//* Complejidad
// 	•	Tiempo: O(n), donde n es el número de caracteres en pattern (igual al número de palabras en s), ya que iteramos una vez.
// 	•	Espacio: O(u), donde u es el número único de caracteres y palabras, ya que almacenamos los pares únicos en los mapas.

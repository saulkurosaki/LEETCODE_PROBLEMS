// 30. Substring with Concatenation of All Words

// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

var findSubstring = function (s, words) {
  const wordLength = words[0].length;
  const wordsAmount = words.length;
  const totalLength = wordLength * wordsAmount;
  const frequenciesMap = new Map();

  // Crear el mapa de frecuencias para las palabras
  for (const word of words) {
    frequenciesMap.set(word, (frequenciesMap.get(word) || 0) + 1);
  }

  const result = [];

  // Recorrer la cadena con una ventana deslizante
  for (let i = 0; i <= s.length - totalLength; i++) {
    const views = new Map();
    let j = 0;

    // Verificar cada fragmento del tamaño de una palabra en la ventana
    while (j < wordsAmount) {
      const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);

      // Si la palabra no existe en el mapa de frecuencias, romper
      if (!frequenciesMap.has(word)) break;

      // Actualizar la cuenta de vistas de la palabra
      views.set(word, (views.get(word) || 0) + 1);

      // Si la palabra aparece más veces de lo permitido, romper
      if (views.get(word) > frequenciesMap.get(word)) break;

      j++;
    }

    // Si todas las palabras coinciden, agregar el índice inicial al resultado
    if (j === wordsAmount) {
      result.push(i);
    }
  }

  return result;
};

//*   Enfoque:
// 	1.	Comprender el problema:
// Cada subcadena concatenada tendrá una longitud fija, calculada como:

// total_length = len(words) * len(words[0])

// Usaremos una ventana deslizante para recorrer la cadena s y verificar si cada subcadena de longitud total_length cumple con las condiciones.
// 	2.	Pasos:
// 	•	Crear un mapa de frecuencias para contar cuántas veces aparece cada palabra en words.
// 	•	Usar una ventana deslizante de tamaño total_length para iterar sobre s.
// 	•	Para cada ventana, dividir la subcadena en fragmentos del tamaño de una palabra y verificar si las palabras coinciden con las frecuencias del mapa.

//* Explicación del código:
// 	1.	Mapa de frecuencias:
//  Creamos un mapa mapaFrecuencias que contiene cuántas veces aparece cada palabra en el arreglo words.

// 	2.	Ventana deslizante:
// 	•	Iteramos sobre la cadena s con una ventana de tamaño longitudTotal.
// 	•	Dividimos la subcadena de la ventana en fragmentos del tamaño de una palabra y verificamos si coinciden con las frecuencias en el mapa.

// 	3.	Validación:
// 	•	Si todas las palabras en la ventana coinciden con las frecuencias del mapa, guardamos el índice inicial de la ventana en el arreglo resultado.

// 	4.	Complejidad:
// 	•	Tiempo: O(n * m), donde n = s.length y m = words.length.
// 	•	Espacio: O(k), donde k es el número de palabras únicas en words.

// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

const reverseWords = (s) => {
  return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
};

//* Algoritmo Variante “In-place” con espacio O(1)

// 	1.	Eliminar espacios adicionales: Quita los espacios iniciales, finales y reduce los múltiples espacios entre palabras a un solo espacio.
// 	2.	Separar las palabras: Divide la cadena en una lista de palabras usando los espacios como delimitadores.
// 	3.	Invertir el orden: Invierte el orden de las palabras en la lista.
// 	4.	Concatenar con un solo espacio: Une las palabras invertidas con un único espacio para formar la cadena de salida.

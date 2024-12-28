// 68. Text Justification

// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.
// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Constraints:

// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

function fullJustify(words, maxWidth) {
  const result = [];
  let line = [];
  let lineLength = 0;

  for (const word of words) {
    // Verificar si la palabra cabe en la línea actual
    if (lineLength + line.length + word.length > maxWidth) {
      // Justificar la línea actual
      result.push(justify(line, lineLength, maxWidth));
      line = [];
      lineLength = 0;
    }
    // Añadir la palabra a la línea
    line.push(word);
    lineLength += word.length;
  }

  // Justificar la última línea (alineación a la izquierda)
  result.push(
    line.join(" ") + " ".repeat(maxWidth - lineLength - (line.length - 1))
  );

  return result;
}

function justify(line, lineLength, maxWidth) {
  const spacesNeeded = maxWidth - lineLength;
  const gaps = line.length - 1;

  // Si hay solo una palabra, alinearla a la izquierda
  if (gaps === 0) {
    return line[0] + " ".repeat(spacesNeeded);
  }

  // Distribuir espacios entre las palabras
  const spacesPerGap = Math.floor(spacesNeeded / gaps);
  const extraSpaces = spacesNeeded % gaps;

  let justified = "";
  for (let i = 0; i < line.length - 1; i++) {
    justified += line[i] + " ".repeat(spacesPerGap + (i < extraSpaces ? 1 : 0));
  }
  justified += line[line.length - 1]; // Añadir la última palabra sin espacios extra
  return justified;
}

// Ejemplos
console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
// Output:
// [
//    "What   must   be",
//    "acknowledgment  ",
//    "shall be        "
// ]

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
// Output:
// [
//    "Science  is  what we",
//    "understand      well",
//    "enough to explain to",
//    "a  computer.  Art is",
//    "everything  else  we",
//    "do                  "
// ]

//* Explicación
// 	1.	Agrupar palabras:
// 	•	Para cada palabra en words, verifica si cabe en la línea actual. Si no cabe, justifica la línea actual y empieza una nueva.
// 	2.	Justificar la línea:
// 	•	Calcula los espacios adicionales necesarios.
// 	•	Distribuye los espacios uniformemente entre las palabras, colocando más espacios al principio si sobran.
// 	3.	Última línea:
// 	•	Une las palabras con un solo espacio entre ellas y rellena con espacios a la derecha.

//* Complejidad
// 	•	Tiempo: O(n), donde n es la longitud total de los caracteres en words. Cada palabra se procesa una vez.
// 	•	Espacio: O(n) para almacenar las líneas justificadas.

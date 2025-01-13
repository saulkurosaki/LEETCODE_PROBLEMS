// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

var minWindow = function (s, t) {
  // Si t es más largo que s, no hay forma de encontrar la ventana
  if (s.length < t.length) return "";

  // Mapa de frecuencias para t
  const targetMap = new Map();
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  // Punteros para la ventana deslizante
  let left = 0;
  let right = 0;

  // Variables para rastrear la ventana actual
  let matchCount = 0; // Cuantos caracteres de t están presentes en la ventana
  let minLength = Infinity; // Longitud de la ventana más pequeña
  let result = "";

  // Mapa de frecuencias para la ventana deslizante
  const windowMap = new Map();

  // Expandimos la ventana moviendo el puntero derecho
  while (right < s.length) {
    const rightChar = s[right];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    // Si la frecuencia de rightChar en la ventana es suficiente para t, aumentamos el matchCount
    if (windowMap.get(rightChar) <= targetMap.get(rightChar)) {
      matchCount++;
    }

    // Si tenemos una ventana válida, intentamos reducirla desde el lado izquierdo
    while (matchCount === t.length) {
      // Verificamos si la ventana actual es más pequeña que la anterior
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = s.slice(left, right + 1);
      }

      // Deslizamos el puntero izquierdo para reducir la ventana
      const leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);
      if (windowMap.get(leftChar) < targetMap.get(leftChar)) {
        matchCount--;
      }
      left++;
    }

    // Deslizamos el puntero derecho
    right++;
  }

  return result;
};

//* Estrategia
// La clave es usar una ventana deslizante para ir avanzando a través de la cadena s y asegurar que en todo momento la ventana contenga todos los caracteres de t (y sus repeticiones). Al mismo tiempo, intentamos mantener la ventana lo más pequeña posible.

// Pasos para la solución:
// 	1.	Contar las frecuencias de los caracteres en t:
// Necesitamos saber cuántas veces aparece cada carácter de t. Esto se puede hacer usando un mapa (o un objeto de frecuencias).
// 	2.	Expandir la ventana:
// Comenzamos con una ventana vacía en s y expandimos la ventana añadiendo caracteres de izquierda a derecha.
// 	3.	Reducir la ventana:
// Una vez que tenemos todos los caracteres de t en la ventana, tratamos de reducirla desde la izquierda para hacerla lo más pequeña posible.
// 	4.	Condición de “ventana válida”:
// La ventana es válida cuando contiene todos los caracteres de t, con sus frecuencias adecuadas. Para verificar si la ventana es válida, mantenemos un contador que nos diga cuántos caracteres de t están presentes en la ventana.
// 	5.	Actualizar el resultado:
// Cada vez que encontramos una ventana válida, comparamos su tamaño con el tamaño de la ventana más pequeña encontrada hasta el momento.

//* Explicación paso a paso:
// 	1.	Preparar las frecuencias de t:
// Se usa un Map para contar cuántas veces aparece cada carácter en t.
// 	2.	Variables de ventana deslizante:
// 	•	left y right son los punteros para los extremos de la ventana.
// 	•	matchCount cuenta cuántos caracteres de t están actualmente presentes en la ventana con la frecuencia suficiente.
// 	•	minLength y result mantienen la longitud y el valor de la subcadena más pequeña válida encontrada.
// 	3.	Expandir y contraer la ventana:
// El puntero right recorre la cadena s mientras se expanden las ventanas. Cuando la ventana contiene todos los caracteres de t con las frecuencias correctas, se mueve el puntero left hacia la derecha para reducir la ventana y hacerla más pequeña.
// 	4.	Verificar y actualizar el resultado:
// Cada vez que encontramos una ventana válida (que contiene todos los caracteres de t), verificamos si su tamaño es el más pequeño encontrado hasta ahora. Si lo es, actualizamos el resultado.

//* Complejidad:
// 	•	Tiempo: O(m + n), donde m es la longitud de s y n es la longitud de t. Ambos punteros (derecho e izquierdo) solo avanzan una vez a lo largo de la cadena, por lo que el tiempo es lineal en el tamaño de s.
// 	•	Espacio: O(n), donde n es el tamaño de t (en el peor caso, si todos los caracteres de t son diferentes, necesitamos almacenar sus frecuencias en un mapa).

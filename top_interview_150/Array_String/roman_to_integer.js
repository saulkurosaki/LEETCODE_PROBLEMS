// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToInt(s) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const n = s.length;

  for (let i = 0; i < n - 1; i++) {
    if (romanToInt[s[i]] < romanToInt[s[i + 1]]) {
      result -= romanToInt[s[i]];
    } else {
      result += romanToInt[s[i]];
    }
  }

  result += romanToInt[s[n - 1]];

  return result;
}

//* Algoritmo

// 	1.	Diccionario de valores romanos:
//  Crear un diccionario que asocie cada símbolo romano con su valor correspondiente:
//    roman_to_int = {
//        'I': 1, 'V': 5, 'X': 10, 'L': 50,
//        'C': 100, 'D': 500, 'M': 1000
//    }
//  2.	Recorrido de la cadena:
// 	•	Inicializar un acumulador result en 0.
// 	•	Recorrer la cadena s desde el primer carácter hasta el penúltimo.
// 	•	Para cada carácter, verificar si su valor es menor que el siguiente:
// 	•	Si es menor, se resta el valor del acumulador.
// 	•	Si no, se suma.
// 	•	Sumar el valor del último carácter, ya que no tiene un carácter siguiente para comparar.
// 	3.	Devolver el resultado:
// 	•	El acumulador result contendrá el valor entero equivalente al número romano.

//* Complejidad

// 	•	Tiempo:  O(n) , donde  n  es la longitud de la cadena s. Se recorre la cadena una sola vez.
// 	•	Espacio:  O(1) , ya que no se utiliza espacio adicional proporcional al tamaño de la entrada.

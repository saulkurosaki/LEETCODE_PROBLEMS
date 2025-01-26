// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map(); // Mapeo de caracteres de s a t
  const mapTS = new Map(); // Mapeo de caracteres de t a s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Verificar si el mapeo en ambas direcciones es consistente
    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false;
    }

    // Registrar el mapeo
    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
};

//* Explicación
// 	1.	Condición inicial:
// 	•	Si las longitudes de s y t no son iguales, devolvemos false inmediatamente.
// 	2.	Mapeos bidireccionales:
// 	•	Usamos mapST para registrar el mapeo de caracteres de s a t.
// 	•	Usamos mapTS para registrar el mapeo inverso de t a s.
// 	3.	Iteración sobre los caracteres:
// 	•	Para cada índice i, verificamos si el carácter de s ya tiene un mapeo registrado en mapST. Si lo tiene y no coincide con el carácter correspondiente en t, devolvemos false.
// 	•	Hacemos lo mismo para mapTS (de t a s).
// 	4.	Agregar mapeos:
// 	•	Si no hay inconsistencias en los mapeos, registramos el par de caracteres actual en ambos mapas.
// 	5.	Resultado:
// 	•	Si completamos la iteración sin encontrar inconsistencias, devolvemos true.

//* Complejidad
// 	•	Tiempo: O(n), donde n es la longitud de las cadenas s y t, ya que recorremos ambas cadenas una vez.
// 	•	Espacio: O(u), donde u es el número único de caracteres en las cadenas, ya que almacenamos hasta u pares en los mapas.

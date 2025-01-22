// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function (ransomNote, magazine) {
  const charCount = new Map();

  // Contar las letras en magazine
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Verificar si ransomNote se puede construir
  for (const char of ransomNote) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false; // No hay suficientes caracteres disponibles
    }
    charCount.set(char, charCount.get(char) - 1); // Usar un carácter de magazine
  }

  return true;
};

//* Explicación
// 	1.	Inicializar el Map:
// Creamos un Map para almacenar la frecuencia de cada carácter en magazine.
// 	2.	Contar letras en magazine:
// 	•	Iteramos sobre magazine.
// 	•	Si el carácter ya está en el Map, incrementamos su valor.
// 	•	Si no está, lo añadimos al Map con un valor inicial de 1.
// 	3.	Verificar ransomNote:
// 	•	Iteramos por cada carácter en ransomNote.
// 	•	Si el carácter no está en el Map o su valor es 0 (es decir, no hay suficientes caracteres disponibles), devolvemos false.
// 	•	Si está disponible, decrementamos su valor en el Map.
// 	4.	Resultado:
// Si logramos procesar todos los caracteres de ransomNote sin encontrar problemas, devolvemos true.

//* Complejidad
// 	•	Tiempo: O(m + n), donde m es la longitud de ransomNote y n es la longitud de magazine. Iteramos una vez sobre cada string.
// 	•	Espacio: O(u), donde u es el número único de caracteres en magazine.

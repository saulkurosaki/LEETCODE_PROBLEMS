// 2705. Compact Object

// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// Constraints:

// obj is a valid JSON object
// 2 <= JSON.stringify(obj).length <= 106

var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    // Si es un arreglo, filtramos los valores no falsy y llamamos recursivamente si hay valores anidados
    return obj
      .filter(Boolean) // Eliminamos valores falsy
      .map((value) =>
        typeof value === "object" ? compactObject(value) : value
      ); // Procesamos valores anidados
  } else if (obj !== null && typeof obj === "object") {
    // Si es un objeto, iteramos sobre sus claves
    const result = {};
    for (const key in obj) {
      if (Boolean(obj[key])) {
        // Si el valor es "truthy", lo procesamos
        result[key] =
          typeof obj[key] === "object" ? compactObject(obj[key]) : obj[key];
      }
    }
    return result;
  }
  // Si no es un arreglo ni un objeto, simplemente lo devolvemos
  return obj;
};

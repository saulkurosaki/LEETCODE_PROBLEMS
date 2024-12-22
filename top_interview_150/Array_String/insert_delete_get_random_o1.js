// 380. Insert Delete GetRandom O(1)

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

// Constraints:

// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.

class RandomizedSet {
  constructor() {
    this.data = []; // Lista para almacenar los elementos
    this.indexMap = new Map(); // Mapa para almacenar el índice de cada elemento
  }
}

RandomizedSet.prototype.insert = function (val) {
  if (this.indexMap.has(val)) return false; // Si ya existe, no lo inserta

  this.data.push(val); // Añadir al final de la lista
  this.indexMap.set(val, this.data.length - 1); // Registrar su índice en el mapa

  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.indexMap.has(val)) return false; // Si no existe, no puede eliminarlo

  const index = this.indexMap.get(val); // Obtener el índice del elemento a eliminar
  const lastElement = this.data[this.data.length - 1]; // Obtener el último elemento de la lista

  // Intercambiar el elemento a eliminar con el último elemento
  this.data[index] = lastElement;
  this.indexMap.set(lastElement, index);

  // Eliminar el último elemento de la lista
  this.data.pop();
  this.indexMap.delete(val); // Eliminar del mapa

  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.data.length);
  return this.data[randomIndex]; // Devolver un elemento aleatorio
};

// Explicación del Código

// 	1.	insert(val)
// 	•	Verifica si el valor ya está presente utilizando el mapa.
// 	•	Si no está presente, lo agrega al final de la lista y actualiza el mapa con su índice.
// 	2.	remove(val)
// 	•	Verifica si el valor está presente utilizando el mapa.
// 	•	Si está presente:
// 	•	Intercambia el valor con el último elemento de la lista.
// 	•	Actualiza el índice del último elemento en el mapa.
// 	•	Elimina el último elemento de la lista y el valor del mapa.
// 	3.	getRandom()
// 	•	Genera un índice aleatorio dentro del rango de la lista y devuelve el elemento en ese índice.

// Complejidad

// 	1.	insert
// 	•	Acceso y actualización del mapa:  O(1) .
// 	•	Inserción en la lista:  O(1) .
// 	•	Complejidad total:  O(1) .
// 	2.	remove
// 	•	Acceso y actualización del mapa:  O(1) .
// 	•	Intercambio y eliminación de elementos de la lista:  O(1) .
// 	•	Complejidad total:  O(1) .
// 	3.	getRandom
// 	•	Generar un índice aleatorio y acceder al elemento:  O(1) .
// 	•	Complejidad total:  O(1) .

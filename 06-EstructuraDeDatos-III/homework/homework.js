"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  } else {
    if (this.left && !this.right) {
      return this.left.size() + 1;
    } else if (!this.left && this.right) {
      return this.right.size() + 1;
    } else {
      return Math.max(this.left.size() + 1, this.right.size() + 1);
    }
  }
};
BinarySearchTree.prototype.insert = function (value) {
  value < this.data
    ? !this.left
      ? (this.left = new BinarySearchTree(value))
      : this.left.insert(value)
    : !this.right
    ? (this.right = new BinarySearchTree(value))
    : this.right.insert(value);
};
BinarySearchTree.prototype.contains = function () {};
BinarySearchTree.prototype.depthFirstForEach = function () {};
BinarySearchTree.prototype.breadthFirstForEach = function () {};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

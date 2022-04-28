const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class treeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null
  }
}
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  add(data) {
    const node = new treeNode(data);

    if(!this.tree) {
      this.tree = node
    } else {
      return this.appendNode(this.tree, node)
    }
    return this
  }

  appendNode(node, newN) {
    if(newN.data < node.data) {
      if(!node.left) {
        node.left = newN
      } else {
        return this.appendNode(node.left, newN)
      }
    } else {
      if(!node.right) {
        node.right = newN
      } else {
        return this.appendNode(node.right, newN)
      }
    }
    return this
  }

  root() {
    return this.tree
  }


  has(data, node = this.tree) {
    // console.log(data, node.data);
    if(node === null) {
      return false
    } else if(data < node.data) {
      return this.has(data, node.left)
    } else if (data > node.data) {
      return this.has(data, node.right)
    } else {
      return true
    }
  }

  find(data, node = this.tree) {
    if(!node) {
      return null
    } else if(data < node.data) {
      return this.find(data, node.left)
    } else if (data > node.data) {
      return this.find(data, node.right)
    } else {
      return node
    }
  }
  
  remove(data) {
    this.tree = this.removeByData(this.tree, data)
  }

  removeByData(node, data) {

    if(!node) {

      return null

    } else if(data < node.data) {

      node.left = this.removeByData(node.left, data)
      return node

    } else if (data > node.data) {

      node.right = this.removeByData(node.right, data)
      return node

    } else {

      if(!node.left && !node.right) {
        node = null
        return node
      } 
      if(!node.left) {

        node = node.right
        return node

      }else if (!node.right) {
        node = node.left
        return node
      }

      const minVal = this.min(node.right);

      console.log(minVal);

      node.data = minVal;

      node.right = this.removeByData(node.right, minVal);
      return node;
    }
  }

  min(node = this.tree) {
    if(!node.left) {
      if(node.data) {
        return node.data
      } 
      return node
    } else {
      return this.min(node.left)
    }
  }

  max(node = this.tree) {
    if(!node.right) {
      if(node.data) {
        return node.data
      } 
      return node
    } else {
      return this.max(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};
class Node {
  constructor(element)
  {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor()
  {
    this.head = null;
    this.size = 0;
  }


  insert(element){
    let node = new Node(element);
    let current;

    if (this.head === null)
      this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertBefore(element, key){
    let node = new Node(element);
    let prev;
    let curr = this.head;
    if (key === curr) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head;
      while (curr.element !== key) {
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }

  insertAfter(element, key){
    let node = new Node(element);
    let curr = this.head;
    if (key === curr) {
      node.next = curr.next;
      curr.next = node;
    } else {
      curr = this.head;
      while (curr.element !== key) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
    this.size++;
  }


  insertAt(element, index){
    if (index > 0 && index > this.size)
      return false;
    else {
      let node = new Node(element);
      let prev;
      let curr = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }



  removeIndex(index){
    if (index > 0 && index > this.size)
      return -1;
    else {
      let it = 0;
      let curr = this.head;
      let prev = curr;
      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  removeElement(element){
    let curr = this.head;
    let prev = null;
    while (curr !== null) {
      if (curr.element === element) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  find(element) { 
    let curr = this.head;
    if (!this.head){
      return null;
    }
    while(curr.value !== element) {
      if (curr.next === null) {
        return null;
      }
      else { 
        curr = curr.next;
      }
    }
    return curr;
  }
}



module.exports= LinkedList;


const LinkList = require('./linkedlist');
const util = require('util');

function main(){
  const SLL= new LinkList();

  SLL.insert('Apollo');
  SLL.insert('Boomer');
  SLL.insert('Helo');
  SLL.insert('Husker');
  SLL.insert('Starbuck');

  SLL.insert('Tauhinda');

  SLL.removeElement('squirrel');
  
  SLL.insertBefore('Athena','Boomer');

  SLL.insertAfter('Hotdog','Helo');

  SLL.insertAt('Kat',2);

  SLL.removeElement('Tauhinda');

  // JSON.stringify(SLL);
  // console.log(util.inspect(SLL, false, null));

  listSize(SLL);
  isEmpty(SLL);
  displayList(SLL);
  findPrev('Helo', SLL);
  findLast(SLL);
}


function listSize(list){
  console.log(list.size);
}


function isEmpty(list){
  if(list.size === 0){
    console.log('true');
  }else{console.log('false');}
}

function displayList(list){
  var curr = list.head;
  var str = '';
  while (curr) {
    str += curr.element + ' ';
    curr = curr.next;
  }
  console.log(str);
}

function findPrev(element, list){
  let curr = list.head;
  let prev;
  if (!list.head){
    return null;
  }

  while(curr.element !== element) {
    prev= curr;
    curr=curr.next;
  }
  console.log(prev.element);
}


function findLast(list){
  let curr = list.head;
  if (!list.head){
    return null;
  }
  while(curr.next !== null) {
    curr=curr.next;
  }
  console.log(curr.element);
}

main();

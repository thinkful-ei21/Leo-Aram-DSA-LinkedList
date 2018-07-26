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

  // SLL.removeElement('Tauhinda');

  // JSON.stringify(SLL);
  // console.log(util.inspect(SLL, false, null));

  listSize(SLL);
  isEmpty(SLL);
  displayList(SLL);
  findPrev('Helo', SLL);
  findLast(SLL);
  findThirdFromLast(SLL);
  findMid(SLL);

  console.log(util.inspect(JSON.stringify(reverseList(SLL.head))));

}

main();



function listSize(list){
  console.log('the list size is '+list.size);
}

function isEmpty(list){
  if(list.size === 0){
    console.log('the list is empty');
  }else{console.log('the list is not empty');}
}

function displayList(list){
  var curr = list.head;
  var str = '';
  while (curr) {
    str += curr.element + ' ';
    curr = curr.next;
  }
  console.log('list= '+str);
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
  console.log(prev.element + ` is before ${element}`);
}

function findLast(list){
  let curr = list.head;
  if (!list.head){
    return null;
  }
  while(curr.next !== null) {
    curr=curr.next;
  }
  console.log(curr.element+ ' is last');
}


function reverseList(head, parent){
  let result = parent || {};
  if (head) {
    let child = head.next;
    head.next = parent;
    result = reverseList(child, head);
  }
  return result;
}


function findThirdFromLast(list){
  let curr = list.head;
  let prev;
  if (!list.head){
    return null;
  }
  while(curr.next.next !== null) {
    prev=curr;
    curr=curr.next;
  }
  console.log(prev.element + ' is 3rd from last');
}

function findMid(list){
  let curr = list.head;
  let mid=list.head;
  let it=0;
  if (!list.head){
    return null;
  }
  while(curr.next !== null) {
    it++;
    if(it%2===0){
      mid=mid.next;
    }
    curr=curr.next;
  }
  console.log(mid.element + ' is mid');
}

// const set=new Set([1,2,3])

// set.add(4)
// console.log(set.has(4))
// // set.delete(3)
// console.log(set.size)
// for(const item of set){
//     console.log(item)
// }

// const map=new Map([['a',1],['b',2]])
// map.set('c',3)
// map.set(true,4)
// console.log(map.has('c'))

// for(const [key,value] of map){
//     console.log(`${key}:${value}`)
// }

// const obj={
//     prop1:"i'm",
//     prop2:"latha",
//     prop3:"sanniboina"
// }

// obj.prop6 = () => console.log("yet another example")

// console.log(obj.prop1)
// obj.prop6()

// console.log(obj.keys())


// class Queue{

//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.dequeue())
// queue.print()

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue(){
//         const item=this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear-this.front===0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items)
//     }

// }

// const  queue=new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.peek()

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }
//     append(data){
//         const newNode=new Node(data)

//         if(!this.head){
//             this.head=newNode;
//             return;
//         }else{
//             let current=this.head;
//             while(current.next){
//                 current=current.next
//             }
//             current.next=newNode;
//         }
//         this.size++
//     }
//     prepend(value){
//         const node =new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty')
//         }else{
//             let curr=this.head
//             let listvalues=''
//             while(curr){
//                 listvalues+=`${curr.value}`
//                 curr=curr.next
//             }
//             console.log(listvalues)
//         }
//     }

// }

// const list=new LinkedList()
// console.log('List is empty',list.isEmpty())
// console.log('list size',list.getSize())
// list.append(10);
// list.append(20);
// console.log(list.append(30));
// list.print()


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     append(data) {
//         const newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.size++;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.data} `; // Use curr.data
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList();
// console.log('List is empty:', list.isEmpty());
// console.log('List size:', list.getSize());
// list.append(10);
// list.append(20);
// list.append(30);
// list.print(); // Output: 10 20 30




// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//          return total%this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         // this.table[index]=value
//         const bucket=this.table[index]
//         if(!bucket){
//             bucket=[[key,value]]
//         }else{
//             const samekeyitem=bucket.find(item=>item[0]===key)
//             if(samekeyitem){
//                 samekeyitem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
        
//     }
//     get(key){
//         const index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const table=new HashTable(50)

// table.set("name","latha")
// table.set(100,"usha")
// table.display()


class Node{
    constructor(value){
        this.value=value;
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }
}
const bst=new BinarySearchTree()
console.log('tree is empty')
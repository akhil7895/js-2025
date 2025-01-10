// Two types 

// Primitive (call by value )

// Number , String , Boolean , null , undefined , symbol , BigInt

const id = Symbol('123');
const id2 = Symbol('123')

console.log(id===id2);

// Non - Premitive (call by reference)

// Array , Object , Function


// Two types of data storage in meemory 

// 1 Stack (All primitive data types stores here) 

// 2 Heap (All non primitive datatypes )


//String interpolation


const name = "Akhil"

const age = 20

console.log(`My name is ${name} and my age is ${age}`)
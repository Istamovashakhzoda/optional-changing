"use script"

let user ={
  fName: "Shakhzoda",
  sname: "Istamova",
  age : 19,
  auth:{
    login :"shahzoda",
    pass:"code",
    email:"istamovash@gmail.com"
  },
};

// console.log(user.auth.pass);


// 
// for (let element of Object.keys(user)){
//   console.log(element);
// }

// for(let element of Object.values(user)){
//   console.log(element);
// }

// for (let element of Object.entries(user)){
//   console.log(element);
// }

 ////SETS     SETS  SETS         SETS---------------------

 let arr=[12,12,13,15,17,33,66,88,99];

  let saveSet = new Set(arr);

//  console.log(saveSet);

// const saveSet = new Set([2,14,34,45,54,55]);

// const saveSet2 =new Set();

// console.log(saveSet);
 
//----------------------------------SIZE---------------------------------
//console.log(saveSet.size);

//HAS
// console.log(saveSet.has(12));
// console.log(saveSet .has(-12));

//ADD
// saveSet.add(222);
// console.log(saveSet);

//DELETE
// saveSet.delete(12);
// console.log(saveSet);

//clear
// saveSet.clear();
// console.log(saveSet);

// for(let element of saveSet){
//   console.log(element);
// }

// let newArr=[...saveSet];
// console.log(newArr);

//MAP

 //const map = new Map();
// console.log(map);

//set
// map.set("fName" , "Shahzoda");
// console.log(map);

//GET
//console.log(map.get("fName"));

//HAS
//console.log(map.has("fName"));

//DELETE
// console.log(map);
// map.delete("fName");
// console.log(map);

// //clear
// map.clear();
// console.log(map);

// //size
// console.log(map.size);

const arr2=[
  ["fName" , "SHAKHZODA"],
  ["sname" , "istamova"],
  ["age","age"],
  ["login", "shahzoda"],
  ["pass","password"]
];
// console.log(arr2);

//map.set(arr2);
//console.log(map);

let map =new Map(arr2);
console.log(map);

for (let el of map){
  console.log(el);
}

for (let[key,val] of map){
  console.log(key,val);
}

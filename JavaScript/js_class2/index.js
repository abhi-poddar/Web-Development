console.log('lets start');

//object create
// let rectangle={
//     length:1,
//     breadth:2,
//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// factory function
// function createRectangle(length,breadth){
//     let rectangle={
//         length,
//         breadth,
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }
// let rectangleObj1 = createRectangle(5,4);
// let rectangl2 = createRectangle(2,4);
// let rectangle3 = createRectangle(3,4);

// constructor function -> pascal notation -> first letter of every word is capital
// constructor function -> prop/method -> initialize/define
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//    this.draw= function() {
//         console.log('drawing rectangle');
//     }
// }
// object creation using constructor function
// let rectangleObject = new Rectangle(4,6);
// rectangleObject.color='yellow';
// console.log(rectangleObject)
// delete rectangleObject.color;
// console.log(rectangleObject)

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// let a ={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);

// let rectangle ={
//     length:2,
//     breadth:3
// };
// for-in loop
// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// object-clone #1
// let src={
//     a:10,
//     b:20,
//     c:30
// }
// let dest ={}
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

// object-clone #2
// let src={
//     a:10,
//     b:20,
//     c:30
// }
// let dest = Object.assign({},src);
// console.log(dest);


// object-clone #2
// let src={
//     a:10,
//     b:20,
//     c:30
// }
// let dest={...src};
// console.log(dest);
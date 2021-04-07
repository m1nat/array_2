// let array = [1, 2, 3, 4, 5];
// array.splice(1, 1)
// array.splice(2, 1)
// console.log(array);


// _________________________________#2____________________________

// function rev(str) {
// let arrString = str.split(' ');
// let rev = arrString.reverse();
// let string_2 = rev.join(' ');
// return string_2
// }
 
// let result = rev('Hello world, with love from Siberia !!!');
// console.log(result);

// _______________________________#3_____________________________________



// let result = rev_2('Hello world, with love from Siberia !!!');
// console.log(result);

// function rev_2(str) {
//     let equal = [];
//     let arr = str.split(' ');
//     for(i = arr.length - 1; i >= 0; i--){
//         equal.push(arr[i]);
//     }
//     str = equal.join(' ');
//     return str
// }

// _________________________________________#4_______________________________________________________________

// let x = sort([1, 3, 5, 6, 9], [1, 3, 5, 6, 9]);
// console.log(x);
// let g = sort([1, 2, 5], [2, 4, 5]);
// console.log(g);

// a)___

// function sort(first, second){
//     let y;
//     for(i = 0; i < first.length; i++){
//             for(j = 0; j < second.length; j++)
//                 if (first[i] == second[j] ){
//                     return true;
//                 } else {
//                     return false;
//                 }
//     }
// }

// b)___

// function sort(first, second){
//     first = first.join(' ');
//     second = second.join(' ');
//     return first == second? true : false;
// }

// ____________________________________________________________________________________________________________________________________________________

// let arr = fizzBuzzz([]);

// function fizzBuzzz (array){
// let y;
// for(i = 0; i <= 99; i++){
//     array[i] = i + 1
//     }
// for(i = 0; i < array.length; i++){
//     if (!(array[i] % 15)){
//         array[i] =  'fizzBuzz';
//         console.log(array[i]);
//     }   else if (!(array[i] % 3)){
//             array[i] =  'fizz';
//             console.log(array[i]);
//     }       else if (!(i % 5)){
//                 array[i] = 'buzz'
//                 console.log(array[i]);
//     }           else
//                     console.log(array[i]);
//     }
// }

// ____________________________________________________________________________________________________________________________________________________

// let str = "";
// let size = 8;
// let letter1 = "#";
// let letter2 = " ";
// for (i = 0; i < 72; i++) {
//   if (i % 9 == 0) {
//     str = str + '\n';
//   } else if (i % 2 == 0) {
//     str = str + letter1;
//   } else {
//     str = str + letter2;
//   }
// }
// console.log(str);









/*Implement a function, findProduct(), that takes an array of integers, replaces each element of the array with the product of the other elements. 

let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]
*/





/*
Write a function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.

E.g. given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90].
*/

//          ****Solution******

function mergeArray(array1,array2){
  let array3 = array1.concat(array2);
  console.log(array3);

  let sortedArray = array3.sort(function(a, b){
  return a - b;
  })
  
  console.log(sortedArray);
}
mergeArray([1,4,5,7],[2,6,3]);

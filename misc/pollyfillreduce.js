if (!Array.prototype.customReduce) {
    Array.prototype.customReduce = function(callback, initialValue) {
     let accumulator;
     let firstIndex;
     //we get only the callback param,in this case we know initialValue is not pass and 
     //we set the accumulator to be with the first item and set firstIndex to be 1
     if (arguments.length === 1) {
       accumulator = this[0];
       firstIndex = 1;
     } 
     //we get both callback and initialValue
     //in this case we set the accumulator to initialValue and firstIndex to be 0
     else {
       accumulator = initialValue;
       firstIndex = 0;
     }
     //we will iterate on each item in the array (depend what we set for the firstIndex)
     //and each time we keep the new accumulator
     for (let index = firstIndex; index < this.length; index++) {
       accumulator = callback(accumulator, this[index], index);
     }
     //when iteration is done we return the accumulator
     return accumulator;
   }
 } 
 
 // declare an array
 var numbers = [1, 2, 3, 4, 5];
 //function getSum(total, num) {
 //  return total + num;
 //}
 //console.log(numbers.customReduce(getSum))
 
 // call custom reduce() on array to get sum of all elements
 console.log(numbers.customReduce((total,num) => total + num, 0))
 // prints 15
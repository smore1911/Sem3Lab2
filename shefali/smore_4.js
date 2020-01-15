//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s){
  var wordArr = s.split(" ");  
  var lengthArr = []; 
  for (var i = 0; i < wordArr.length; i++) {
    lengthArr[i] = wordArr[i].length; 
  }
  var lowestNum = lengthArr[0]; 
  for (var j = 0; j < lengthArr.length; j++) {
    if (lengthArr[j] < lowestNum) {
      lowestNum = lengthArr[j]; 
    }
  }
  
  return lowestNum; 
}
console.log(findShort("Please fill this form in the morning"))
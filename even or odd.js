//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function even_or_odd(number) {
  return ( number & 1 ) ? "Odd" : "Even";
}
console.log(even_or_odd(2))
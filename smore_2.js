//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n){
  if (n == 0 || n == 1)
    return 1;
  if (factorial[n] > 0)
    return factorial[n];
  return factorial[n] = factorial(n-1) * n;
}
console.log(factorial(5))
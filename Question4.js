//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr){
  return [...new Set(arr.filter(v=>v%2===0).sort((a,b)=>a-b).concat(arr.filter(v=>v%2!==0).sort((a,b)=>b-a)))]
}
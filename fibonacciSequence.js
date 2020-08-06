const fibonnaci = (number=1) => {
  let array=[0];
  array.push(number);   
for(let i= array.length-1;array[i]<22000; i++){
  number=array[i]+array[i-1];
  array.push(number);
 }
  console.log(array.join());
}
fibonnaci(7);

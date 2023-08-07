
var length=parseInt(prompt("enter the length of the array"))
var array=[];
for(i=0;i<=length;i++){

     array[i]=parseInt(prompt("enter the number"));
}
console.log(array);
console.log("the array in reverse order is");

     for(i=length-1;i>=0;i--)
     {
      console.log(array[i]);

     }




var length=parseInt(prompt("enter the length of the array"))
var array=[];
var found=0;
for(i=0;i<length;i++){

     array[i]=parseInt(prompt("enter the number"));
}
console.log(array);
var key=parseInt(prompt("enter the element tio be searched"))

     for(i=0;i<length;i++)
     {
      if(array[i]==key)
      found++;
}
if(found)

console.log("element found");
else
console.log("element is not found");

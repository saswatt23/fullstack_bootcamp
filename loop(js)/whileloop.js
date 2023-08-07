var a=parseInt(prompt("enter the number"));
var sum=0;
let rem;
while(a>0)
{
    rem=a%10;
    sum=sum+rem;
    a= parseInt(a/10);

}
console.log(sum);
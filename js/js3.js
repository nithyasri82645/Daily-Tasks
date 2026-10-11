let num=prompt("Enter a number:");
num=Number(num);  
if (num%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}
function table(num){
    console.log("Multiplication table of" + num + "is:");
    for(let i=1;i<=10;i++){
        console.log(num+"X"+i+"="+(num*i));
    }
}
table(num);
let sum=0;
for(let i=0;i<=num;i++){
    sum+=i;
}
console.log("Sum of natural numbers is" + sum);
for(let i=1;i<=num;i++){
    let stars="";
    for(let j=1;j<=num;j++){
        stars=stars + "*";
        
    }
    console.log(stars," ")
}


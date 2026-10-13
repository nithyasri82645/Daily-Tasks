function program(){
let num=prompt("Enter a number:");
num=Number(num);  
if (num%2==0){
    console.log("Number is even");
    console.log("Square Pattern:")
    for(let i=1;i<=num;i++){
        let stars="";
    for(let j=1;j<=num;j++){
        stars=stars + "*";
    }
    console.log(stars)
}
}
else{
    console.log("Number is odd");
    console.log("Right Angled Triangle Pattern:")
    for(let i=1;i<=num;i++){
        let stars="";
    for(let j=1;j<=i;j++){
        stars=stars + "*";
    }
    console.log(stars)
}
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
}}
program();
conf=confirm("Do you want to run the program again ?");
conf=Boolean(conf);
if (conf==true){
    program();
}
else{
    console.log("Thank you !")
}




console.log("SMART VENDING MACHINE");
const menu=[
    {item:1,name:"Chips",price:20},
    {item:2,name:"Chocolate",price:30},
    {item:3,name:"Biscuit",price:25},
    {item:4,name:"Juice",price:35},
    {item:5,name:"Milkshake",price:50}
];
function view(){
menu.forEach(a =>{
    console.log(`${a.item}. ${a.name} - Rs. ${a.price}`)
});}
    viewMenu=view();
    console.log(viewMenu);
alert("Welcome to the Smart Vending Machine !");
let userItem=prompt("Enter the item number you want to buy:");
let amount=prompt("Enter the amount you have:");
amount=Number(amount);
if (userItem<0 || userItem>5){
    alert("Invalid Item Number");
}
let selectedItem=menu.find(i=>i.item==userItem);
if (Number(amount)<=0){
    alert("Amount is invalid !");
}
  for(i=3;i>=1;i--){
    console.log(i);
  }
  console.log("Item is ready")
function change(amount,price){
    return amount-price;
}
    if (change(amount,selectedItem.price)==0){
        alert("You have exactly enough money");
        console.log("Your item is",selectedItem.name)
    }
    else if (change(amount,selectedItem.price)<0){
        alert("Insufficient balance");
    }
    else if(change(amount,selectedItem.price)>0){
        console.log("Your item is",selectedItem.name)
        alert("You have more money than required")
        console.log("Your change is ",change(amount,selectedItem.price));
    }
    else{
        console.log("Invalid Balance Amount")
    }
    for(let row=1;row<=userItem;row++){
        let line="";
        for(let num=1;num<=row;num++){
            line=line+num+" ";
        }
        console.log(line)
    }
conf=confirm("Do you want to purchase again ?")
conf=Boolean(conf)
if(conf==true){
    console.log(view())}
else{
    console.log("Thank You !")
}
    

   
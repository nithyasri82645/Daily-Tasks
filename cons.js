// function Pizza(size,topping,isBaked){
//     this.size=size;
//     this.topping=topping;
//     this.isBaked=isBaked;
// if(isBaked==true){
//     console.log("Pizza is Baked");
// }
// else{
//     console.log("Pizza is not Baked");
// }
// }
// let order1=new Pizza("large","mushroom",true);
// // let order2=new Pizza("small","pepperoni",false);
// console.log(order1.topping);
// // console.log(order2.size);
let mat=[[1,2,3],
        [4,5,6],
        [7,8,9]];
for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
                console.log(mat[i][j])
        }
}
let changeClr=document.getElementById("changeClr");
let missionInput=document.getElementById("input");
let addBtn=document.getElementById("addMission");
let missionCount=document.getElementById("missionCount");
let completedCount=document.getElementById("completedCount");
let pendingCount=document.getElementById("pendingCount");
let missionList=document.getElementById("missionList");
function updateCount(){
    let total=missionList.children.length;
    let completed=0;
    for(i=0;i<total;i++){
        let li=missionList.children[i];
        if(li.style.textDecoration==="line-through"){
            completed++;
        } 
    }
    let pending=total-completed;
    missionCount.textContent=total;
    completedCount.textContent=completed;
    pendingCount.textContent=pending;
}
function addNewMission(){
    let text=missionInput.value.trim();
    if(text===""){
        return;
    }
    const li=document.createElement("li");
    li.textContent=text;
    li.onclick=function(){
        if(li.style.textDecoration==="line-through"){
            li.style.textDecoration="none";
            li.style.color="black";
        }
        else{
            li.style.textDecoration="line-through";
            li.style.color="green";
        }
        updateCount();
    }

const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.onclick=function(event){
    event.stopPropagation();
    li.remove();
    updateCount();
}
li.appendChild(deleteBtn);
missionList.appendChild(li);
missionInput.value="";
updateCount();
}
addBtn.onclick=addNewMission;
const colors=["white","lightblue","lightyellow","lightgreen"]
let index=0;
changeClr.onclick=function(){
    index=(index+1)%colors.length;
    document.body.style.backgroundColor=colors[index];
};
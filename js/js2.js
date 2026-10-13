function details(){
    let stud=prompt("Enter the name of the student:");
    let mark1=prompt("Enter the marks of first subject:");
    let mark2=prompt("Enter the marks of second subject:");
    let mark3=prompt("Enter the marks of third subject:");
    mark1=Number(mark1); 
    mark2=Number(mark2);
    mark3=Number(mark3); 
    return [stud,mark1,mark2,mark3]; 
}
    function total(mark1,mark2,mark3){
        return mark1+mark2+mark3
    }
    function avg(mark1,mark2,mark3){
        return (mark1+mark2+mark3)/3
    }
    function grade(average){
        if (average>=90){
            return "Grade A";
        }
        else if(average>=75){
            return "Grade B";
        }
        else if(average>=50){
            return"Grade C";
        }
        else if(average<50){
            return "Grade F";
        }
        else{
            alert("Invalid marks");
        }
    }
    let data=details();
    let stud=data[0];
    let mark1=data[1];
    let mark2=data[2];
    let mark3=data[3];
    let sum=total(mark1,mark2,mark3);
    let average=avg(mark1,mark2,mark3);
    let grades=grade(average);
    if(mark1<0||mark1>100||mark2<0||mark2>100||mark3<0||mark3>100 ){
        alert("Invalid marks")
    }
    else{
        alert("Student Name:"+stud+
        "\nTotal Marks:"+sum+
        "\nAverage:"+average+
    "\nGrade:"+grades);
    }

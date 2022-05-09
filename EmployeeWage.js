//UC1

const Is_Absent = 0;

let Attendance = Math.floor(Math.random() * 10) %2;
if (Attendance == Is_Absent){

    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}
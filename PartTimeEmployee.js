const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 8;
const Full_TIME_HOURS = 16;
const WAGE_PER_HOUR = 20;

let empHRS = 0;
empCheck = Math.floor(Math.random() * 10) %3;
let empWage = empHRS * WAGE_PER_HOUR;

if (empCheck == IS_PART_TIME){
    empWage = WAGE_PER_HOUR*PART_TIME_HOURS;
    console.log("Part Time Employee is : "+empWage);
}
else if(empCheck == IS_FULL_TIME)
{
    empWage = WAGE_PER_HOUR*Full_TIME_HOURS ;
    console.log("Employee is Present Full Time : "+empWage);
}
else
{
    empWage = 0
    console.log("Employee wage: "+empWage)
}
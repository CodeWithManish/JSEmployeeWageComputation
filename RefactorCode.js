//UC4

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const Full_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20

function getWorkingHours(empCheck) {
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return Full_TIME_HOURS;

        default:
             return 0;
    }
}
let empHRS = 0;
let empCheck = Math.floor(Math.random() * 10 ) %3;
empHRS = getWorkingHours(empCheck);
let empWage = empHRS * WAGE_PER_HOUR;
console.log("Employee Wage : " + empWage);
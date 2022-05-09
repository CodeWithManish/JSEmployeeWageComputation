//UC6

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const Full_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 2;
const TOTAL_WORKING_DAYS = 20;
const TOTAL_WORKING_HOURS = 100;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return Full_TIME_HOURS;

        default:
            return 0;
    }
}
let empWorkingDays = 0;
let empWorkingHrs = 0;
let empHrs = 0;
while (empWorkingDays < TOTAL_WORKING_DAYS && empWorkingHrs <= TOTAL_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    empWorkingDays++;
}

let totalEmpWage = empHrs * WAGE_PER_HOUR;
console.log("Total Working Days:" + TOTAL_WORKING_DAYS, "Total Employee Hours :" + empHrs, "Total Employee Wage :" + totalEmpWage);
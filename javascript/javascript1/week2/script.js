
// TASK 1
// Flight booking fullname function
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week2/homework.md#flight-booking-fullname-function

function getFullname(firstname, surname, useFormalName) {
    if ( firstname == undefined || surname == undefined) {
        return 'firstName and lastName are required';
    } else if( useFormalName === undefined || useFormalName == false ) {
        return firstname + ' ' + surname;;
    } else if( useFormalName == true ) {
        return 'Lord ' + firstname + ' ' + surname;
    }
}


// TASK 2
// Event application
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week2/homework.md#event-application

function getEventWeekday(eventInDesiredDays) {
    // Array to represent day name 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let futureDay = d.getDay() + eventInDesiredDays;
    let day = futureDay % 7;
    let dayName = days[day];
    console.log(dayName);
}
// print dayName
getEventWeekday(1);


// TASK 3
// Weather wear
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week2/homework.md#weather-wear

const clothesToWear = getTemperature(7);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

function getTemperature(temperature) {
    if ( temperature > 22 ) {
        return 'shorts and t-shir';
    } else if( temperature > 17 ) {
        return 'pants and full sleev shirt';
    } else if( temperature > 10 ) {
        return 'pants and sweater or fleece'
    } else if( temperature > 4) {
        return 'fleece pant and warm jacket';
    } else {
        return 'winter pant and winter jacket';
    }
}

// TASK 4
// Student manager
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week2/homework.md#student-manager

const class07Students = ["Majid Khan", "Tom Hanks", "Angelina Julie", "Peter Mastrup", "Elias Holm", "Jan Eriskon"];

function addStudentToClass(studentName) {

    if( typeof studentName === 'string') {
        // check if number of students are 7 max
//        if( class07Students.length == 7) {
    if( getNumberOfStudents() == 7) {
            console.log('Cannot add more students to class 07');
        } else {
            // check if student already exists
            if( class07Students.find( e => e == studentName)) {
                console.log(studentName + ' is already in the class');
            } else {
                class07Students.push(studentName);
            }
        }
    } else {
        console.log('Only real names are allowed');
    }
}

function getNumberOfStudents() {
     return class07Students.length;
}
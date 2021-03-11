
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

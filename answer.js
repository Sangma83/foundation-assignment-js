// Question 1: Value Detective 

// function describeValue(num){
//   if(num === "" || num === 0 || num === null || num === undefined){
//     return `${typeof(num)} | falsy`;
//   }else{
//     return `${typeof(num)} | truthy`;
//   }
// }

// describeValue("hello");


// Question 2: Bangladesh Weekend Machine

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

getDayType("Friday"); 

// Question 3: Username Gatekeeper


// Question 4: Dhaka CNG Fare Meter


// Question 5: Run Chase Commentator
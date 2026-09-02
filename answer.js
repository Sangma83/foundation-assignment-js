// Question 1: Value Detective 

function describeValue(num){
  if(num === "" || num === 0 || num === null || num === undefined){
    return `${typeof(num)} | falsy`;
  }else{
    return `${typeof(num)} | truthy`;
  }
}

describeValue("hello");


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

function validateUsername(name){
  if(name.length < 4){
    return "Too Short";
  }else if(name.includes(" ")){
    return "No Space Allowed";
  }else if(name.includes("admin".charAt(0).toLowerCase())){
    return "Reserved Word";
  }else{
    return "Available";
  }
}

validateUsername("Admin_Rahim");

// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0){
   let fare = 50;
   let cost = distance - 2;
   let timeExtra = waitingMinutes * 2;

    if (distance > 2) {
        fare += (cost * 15);
        fare += timeExtra;
    }
    if (isNight) {
        fare += (fare * 0.20);
    }

    return fare;
}

getCngFare(2);


// Question 5: Run Chase Commentator


const getChaseVerdict = (target, scored, ballsLeft) => {

}
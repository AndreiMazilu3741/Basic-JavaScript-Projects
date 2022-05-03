var day = new Date().getDay(); // global variables
var hour = new Date().getHours() 
function wake_Up() {
    if ((day >= 3) && (day <= 5)) { // days off are Wednesday to Friday
        document.getElementById("Waking_Time").innerHTML = "Sleep well, today you are off<br>";
    }
    else if (((day == 6) || (day <= 2)) && (hour < 15)) { // working days are Saturday to Tuesday, waking hour 15
        document.getElementById("Waking_Time").innerHTML = "Continue sleeping. You still have few hours left to sleep<br>";
    }
    else {
        document.getElementById("Waking_Time").innerHTML = "Wake up! It's time to go to work<br>";
    }
}

function compute_Average() {
    var num1 = Number(document.getElementById("First_Number").value); // use of local variable
    var num2 = Number(document.getElementById("Second_Number").value);
    var result = (num1 + num2)/2; 
    document.getElementById("Result").innerHTML = "The average of the numbers " + num1 + "and " + num2 + "is " + result;
}


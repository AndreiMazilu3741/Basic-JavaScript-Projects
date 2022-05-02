function wake_Up() {
    if ((new Date().getDay() >= 3) && (new Date().getDay() <= 5)) { // days off are Wednesday to Friday
        document.getElementById("Waking_Time").innerHTML = "Sleep well, today you are off<br>";
    }
    else if (((new Date().getDay() == 6) || (new Date().getDay() <= 2)) && (new Date().getHours() < 15)) { // working days are Saturday to Tuesday, waking hour 15
        document.getElementById("Waking_Time").innerHTML = "Continue sleeping. You still have few hours left to sleep<br>";
    }
    else {
        document.getElementById("Waking_Time").innerHTML = "Wake up! It's time to go to work<br>";
    }
}
var num1 = document.getElementById("First_Number").value;
var num2 = document.getElementById("Second_Number").value; // the scope of num1 and num2 si global
function compute_Average() {
    var result = (num1 + num2)/2; // the scope of result is local
    document.getElementById("Result").innerHTML = "The average of the numbers " + num1 + "and " + num2 + "is " + result;
}


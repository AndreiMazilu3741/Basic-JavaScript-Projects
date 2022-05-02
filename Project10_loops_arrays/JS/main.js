function fibonacci() {
    var num1 = 0;
    var num2 = 1;
    document.write("The first 20 Fibonacci numbers are: 0, 1, ");
    var counter = 2; // set counter to 2 because I previously wrote the first two in a string
    while (counter < 20) {  // set the number of fibonacci numbers to display
        var fib = num1 + num2;  // compute next fibonacci number
        document.write(fib + ", "); // print the result
        num1 = num2; // set the second to last number for the next iteration to the one that was last previously
        num2 = fib;  // set the last number number for the next iteration to the sum of those that were the sum of the last two in the previous iteration   
        counter++; // incre,emt counter by 1
    }
}

var list = [24, 65, 2, 78]; // the array of numbers to be squared
var content = ""; // an empty variable where to store the square of each number at it's iteration
var key;
function square() {
    for (key = 0; key < list.length; key++) { // the for loop starting at element at position 0 and incrementing until the array is over
        content = list[key]*list[key] + ", ";
        document.write(content);
    }
}

let ticket = {
    vehicle: "bus",
    departure_place: "Newport",
    departure_hour: "8:00 AM",
    destination: "Cardiff",
    price: 2.5,
    description : function () {
        return "The " + this.vehicle + " leaves " + this.departure_place + " at " + this.departure_hour + ". See you in the city center in " + this.destination + " by 9.";
    }
}
document.getElementById("Ticket_Obj").innerHTML = ticket.description();

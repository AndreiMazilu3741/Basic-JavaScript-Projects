/* function ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are to short" : "Your height is just enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
} */

function vote_Function() {
    var Age, Vote;
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "You are to young" : "Your age is proper";
    document.getElementById("Vote").innerHTML = Vote + " to vote";
}
/* function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;        
    }
} */

function make_UpperCase() {
    document.getElementById("Nested_Function").innerHTML = Upper();
    function Upper() {
        var initial_string = "some text";
        var final_string = initial_string.toUpperCase();
        return final_string;
    }
}
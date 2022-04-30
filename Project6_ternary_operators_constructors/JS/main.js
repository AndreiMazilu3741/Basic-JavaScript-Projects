function ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value; // colect the input and store it in the variable Height
    Can_Ride = (Height < 52) ? "You are to short" : "Your height is just enough"; // conditional decision through tertiary operator
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride"; // send the decision to it's proper tag by Id in DOM
}

function vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value; // colect the input and store it in the variable Age
    Can_Vote = (Age < 18) ? "You are to young" : "Your age is proper"; // conditional through tertiary operator
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote"; // sed decision to DOM
}

function Book(Title, Author, Price) { // define the contructor in the function Book
    this.Book_Title = Title;
    this.Book_Author = Author;
    this.Book_Price = Price;
}
var copy1 = new Book("Lectures on Physics", "Richard Feynmann", 100); // make some instances of Book
var copy2 = new Book("Beyond Good and Evil", "Friedrich Nietzsche", 20);
var copy3 = new Book("Brave new world", "Aldous Huxley", 12);
var total_price = copy1.Book_Price + copy2.Book_Price + copy3.Book_Price; // compute the total price of the books in the selection

function myFunction() { // send the shopping list and the total price to DOM
    document.getElementById("Books").innerHTML = 
    "Your shopping list contains: <br>" + copy1.Book_Title + "by" + copy1.Book_Author + "<br>" + copy2.Book_Title + 
    "by" + copy2.Book_Author + "<br>" + copy3.Book_Title + "by" + copy3.Book_Author + 
    ".<br>The total price is: " + total_price + "<br><br>";
}

function count_Function() { // a nested function that ca increment
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;        
    }
}

function make_Upper_Case() { // a nested function to trasform a lower case string into it's upper case version
    document.getElementById("Upper_Case").innerHTML = Upper();
    function Upper() {
        var initial_string = "some text";
        var final_string = initial_string.toUpperCase();
        return final_string;
    }
}
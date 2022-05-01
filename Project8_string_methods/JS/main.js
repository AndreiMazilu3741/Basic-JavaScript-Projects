function full_String() {
    var first_str = "I am a ";
    var second_str = "concatenated ";
    var third_str = "string";
    var result = first_str.concat(second_str, third_str); // concatenate the three strings
    document.getElementById("Concat").innerHTML = result; // send the concatenated string to html page
}
function slice_String() {
    var str = "My name is Andrei Mazilu";
    var first_name = str.slice(11, 17); // slice the str string from position 11 to 17
    var upper = first_name.toUpperCase(); // write the result of the sliced string in upper case
    var surname_position = str.search("Mazilu"); // search the position of the string "Mazilu" into the str
    var num_to_str = surname_position.toString(); // change the type of a number into string
    document.getElementById("str_Slice").innerHTML = first_name; // send the previous four variables to html
    document.getElementById("str_UpperCase").innerHTML = upper;
    document.getElementById("str_Search").innerHTML = surname_position;
    document.getElementById("num_To_String").innerHTML = num_to_str;
}
function precision_Method() {
    var num = 5423534534265.757457544856843;
    document.getElementById("Precision").innerHTML = num.toPrecision (20); // return the first 20 digits of a number 

}function to_Fixed_Method() {
    var pi = 3.14159;
    document.getElementById("to_Fixed").innerHTML = "The number pi with two decimals is " + pi.toFixed(2); // number pi cut to two decimals 
}
function value_Of() {
    var e = 2.718281;
    document.getElementById("Value").innerHTML = e.valueOf(); // Euler's number
}
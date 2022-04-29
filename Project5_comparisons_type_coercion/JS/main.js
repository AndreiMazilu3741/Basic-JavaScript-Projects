var str = "some string";
document.write(typeof(str)); // diplay type of variable str
console.log(2+2); // print an operation in the console
document.write("<br>2" + 2); // coertion type test
console.log(2 + 2 == 4); // display "true" in the console using type_coercion
console.log(2 + 2 == 5); // display "false" in the console using type_coercion
document.write("<br>" + (2 === 2) + "<br>"); // display "true" using === operator
document.write(("2" === 3) + "<br>"); // display "false" using === operator (different data type, different values)
document.write(("2" === 2) + "<br>"); // display "false" using === operator (different data type, same values)
document.write((3 === 2) + "<br>"); // display "false" using === operator (same data type, different values)
document.write ((2 + 2 == 4 && 3 + 3 == 6) + "<br>"); // display "true" using AND operator
document.write ((2 + 2 == 4 && 3 + 3 == 7) + "<br>"); // display "false" using AND operator
document.write ((2 + 2 == 4 || 3 + 3 == 7) + "<br>"); // display "true" using OR operator
document.write ((2 + 2 == 5 || 3+3 == 7) + "<br>"); // display "false" using OR operator
function not_Function () {
    document.getElementById ("Not").innerHTML = !(5 > 8);
}

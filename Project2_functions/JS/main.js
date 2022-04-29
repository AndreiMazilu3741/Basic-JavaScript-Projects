function My_Second_Function () {
    var number1 = 5;
    var number2 = 8;
    var result = number1 + number2;
    document.getElementById ("calculator").innerHTML = result;
    document.write (number1 + "+" + number2 + "=" + result); // It prints nothing. Why? 
    document.write("<br><br><br>");
}
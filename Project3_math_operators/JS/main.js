function My_Third_Function(){
    let num1 = Math.floor((Math.random() * 100) + 1);
    let num2 = Math.floor((Math.random() * 100) + 1);
    var addition = num1 + num2;
    var multiplication = num1 * num2;
    var substraction = num1 - num2;
    var division = num1 / num2;
    var modulus = num1 % num2;
    var modulus_Increment =++ modulus; // increse the value of the variable modulus by 1 and assigning it to modulus_Increet
    var modulus_Decrement =-- modulus; // decrese the value of the variable modulus by 1 and assigning it to modulus_Decrement
    var result = num1 + " + " + num2 + " = " + addition + "<br>" + num1 + " - " + num2 + " = " + substraction + "<br>" + num1 + " * " + num2 + " = " + multiplication + "<br>" + num1 + " / " + num2 + " = " + division + "<br>" + num1 + " % " + num2 + " = " + modulus + "<br><br>" + "The value of modulus_Increment is " + modulus_Increment + "<br>" + "The value of modulus_Decrement is " + modulus_Decrement; 
    document.getElementById("Calculator").innerHTML = result;
}
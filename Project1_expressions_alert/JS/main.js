window.alert("Hello, world!");  // just trying and se what's the difference between window.alert and docuent.write
document.write("Hello, world!<br>"); // I've inserted a <br> to print next stuff on new line
var A = "This is a string";
var A = A.fontcolor("blue");
document.write(A + "<br>");
var B = "Another" + " string";
window.alert(B);
document.write("Where you\'ve been?");
var name="John", age="27", hobby="beer";
var name = name.fontcolor("green"), age = age.fontcolor("green"), hobby = hobby.fontcolor("green");
document.write("<br>" + hobby + "<br>");
function My_First_Function () {
    var str = "This text is green!";
    var result = str.fontcolor ("green");
    document.getElementById ("Green_Text").innerHTML = result;
    document.write (result); // I added this to the function to see what happens after I click the button. Nothing happend. I don't know why. 
    document.write("<br><br><br>");
}

function perimeterRectangle(l, w) {
    perimeter = (2 * l) + (2 * w);
    return perimeter;
}

function isEvenOrOdd(e){
    if (e %2 == 0) {
        console.log("Number is even");
    }
    else if (e %2 == 1) {
        console.log("Number is odd");
    }
    else {
        console.log("Not a number");
    }
}

function equality(xx,yy){
    if (xx>yy) {
        console.log("1st number is greater than 2nd");
    }
    else if (xx==yy) {
        console.log("1st and 2nd numbers are equal");
    }
    else if (xx<yy){
        console.log("2nd number is greater than 1st");
    }
    else{
        console.log("Given numbers are inappropriate");
    }
}
var a = prompt("enter the value for length");
var b = prompt("enter the value for width");
var l = parseInt(a);
var w = parseInt(b);
if (l>0 && w>0) {
    console.log("perimeter equal to  " + perimeterRectangle(a,b));
}
else {
    console.log("Not a rectangle");
}
/* problem 1 */ 
var i = prompt("Enter a number");
var e = parseInt(i);
isEvenOrOdd(e);
/* problem 2 */ 

var x = prompt("enter the 1st number");
var y = prompt("enter the 2nd number");
var xx = parseInt(x);
var yy = parseInt(y);
equality(xx,yy);
/* problem 3 */ 


// a JavaScript program that accepts two integers and displays the larger of the two.
let num1,num2;
num1=prompt("NUM1");
num2=prompt("NUM2");
if(num1>num2){
    document.write("NUM1 = ", num1 , '    ' ,  "is greater than NUM2 = ", num2);
}
else{
    document.write("NUM2 = ", num2 , '   ', "is greater than NUM1 = ", num1);
}

// a JavaScript program that checks whether an integer is an even or an odd number.
let num;
num=prompt("Enter any even or odd number");
if(num%2==0) {
    alert(num+" is even number")
}
else {
    alert(num+" is odd number")
}

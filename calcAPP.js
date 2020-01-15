
function squareNumber(num){
    var squnum = num**2;
    console.log("The result of squaring the number" + num + " is " + squnum);
    return squnum;
}




function halfNumber(num2){
    var half = num2 / 2;
    console.log("Half of " + num2 + " is " + half);
    return half;

}


function percentOf(top,deno){
    var percent = ((top/deno) * 100).toFixed(0);
    console.log(top + " is " + percent +" % of " + deno);
    return percent;
}



function areaOfCircle(radius){
    var area = (Math.PI * squareNumber(radius)).toFixed(2);
    console.log("The area for a circle with " + radius + "is " + area);
    return area;
}




function calAll(alls){
    var half = halfNumber(alls);
    var square = squareNumber(half);
    var circle = areaOfCircle(square);
    var per = percentOf(circle, square);
}
calAll(4);
var col = getComputedStyle(document.getElementById("mySquare")).backgroundColor;
if(col === "rgb(0, 128, 0)")
{
	alert("succes");
}
else
{
	alert("failure");
	//document.getElementById("mySquare").style.backgroundColor = "red";
}


// change the background to red
setBackgroundColor("mySquare", "red");

//test to see if the background changed to red
if(document.getElementById("mySquare").style.backgroundColor === "red")
{
	alert("succes");
}
else
{
	alert("failure");
}

 var rg = new RedOrGreen("mySquare");

rg.makeGreen();

if(document.getElementById("mySquare").style.backgroundColor === "green")
{
	alert("good");
}
else
{
	alert("bad color")
}// write code to check if it is green now

rg.makeRed();

if (document.getElementById("mySquare").style.backgroundColor === "red")
{
	alert("good");
}
else
{
	alert("bad color");
}// write code to check if it is red now

function RedOrGreen(mySquare)
{

	this.makeGreen = function()
	{
		document.getElementById("mySquare").style.backgroundColor = "green";
	}
	this.makeRed = function()
	{
		document.getElementById("mySquare").style.backgroundColor = "red";
	}
}
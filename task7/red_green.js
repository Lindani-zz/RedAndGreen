function RedOrGreen(elementTag)
{
	var newSquare = document.createElement(elementTag);

	this.makeGreen = function()
	{
		newSquare.style.backgroundColor = "green";
		newSquare.innerHTML="Passed!";
		document.getElementById("container").appendChild(newSquare);
	}
	this.makeRed = function(result)
	{
		newSquare.style.backgroundColor = "red";
		newSquare.innerHTML="Fail: "+ result + " " + "Expected: " + helloWorld();
		document.getElementById("container").appendChild(newSquare);

	}
	
};
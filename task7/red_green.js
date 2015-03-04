function RedOrGreen(elementTag)
{
	var newSquare = document.createElement(elementTag);

	this.makeGreen = function(color)
	{
		newSquare.style.backgroundColor = "green";
		newSquare.innerHTML="Passed!";
	}
	this.makeRed = function()
	{
		newSquare.style.backgroundColor = "red";
		newSquare.innerHTML="Fail!";
	}
	document.body.appendChild(newSquare);
};
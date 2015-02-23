function red()
{
	document.getElementById("green").style.backgroundColor= "red";
	var elem = document.getElementById("myButton");

    if (elem.value=="Make Red") 
    	{
    		elem.value = "Make Green";
    	}

    else 
    	{
    		elem.value = "Make Red";
    		document.getElementById("green").style.backgroundColor = "green";
    	}
}
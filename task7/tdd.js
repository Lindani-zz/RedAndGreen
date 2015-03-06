var passes = 0;
var fails = 0;
var stats = 0;
var newP = document.createElement("p");

var assert = {

	equals:function (expectedResult, returnedResult) {
		// body...
		var rg = new RedOrGreen("div");

		if (expectedResult === returnedResult) {
			rg.makeGreen();
			passes++;
			stats = passes+fails;
			newP.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
		}
		else {

			rg.makeRed(expectedResult);
			fails++;
			//alert(expectedResult);
			stats = passes+fails;
			
			newP.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
		}
		 
	}

};
var TestMyCode = {
	run:function(nameOfTest, functionToExecute){
		this.testToRun = nameOfTest;
		functionToExecute(assert);
	}
};


	
	document.body.appendChild(newP);
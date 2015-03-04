var passes = 0;
var fails = 0;

var assert = {

	equals:function (expectedResult, returnedResult) {
		// body...
		var rg = new RedOrGreen("div");

		if (expectedResult === returnedResult) {
			rg.makeGreen();
			++passes;
		}
		else {

			rg.makeRed();
			++fails;
		}
	var stats = passes+fails;
	var newP = document.createElement("p");
	newP.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
	document.body.appendChild(newP);
	}
};

var TestMyCode = {
	run:function(nameOfTest, functionToExecute){
		this.testToRun = nameOfTest;
		functionToExecute(assert);
	}
};


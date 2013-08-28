var randomNumber = Math.floor((Math.random()*100)+1); 
console.log(randomNumber);


var current = null;
var previous = null;

var outSpace = document.getElementById("outputSpace");

function submit(){
	var inBox = document.getElementById("numberField");
	var val = inBox.value;

	previous = current;
	current = val;

	var removeMessages = function () {
			document.getElementById("Right").style.display='none';
			document.getElementById("tooHigh").style.display='none';
			document.getElementById("tooHigh-warmer").style.display='none';
			document.getElementById("tooHigh-colder").style.display='none';
			document.getElementById("tooLow").style.display='none';
			document.getElementById("tooLow-warmer").style.display='none';
			document.getElementById("tooLow-colder").style.display='none';
			document.getElementById("NaN").style.display='none';
		};
	var removeDial = function () {
		document.getElementById("right-arrow").style.display = 'none';
		document.getElementById("cold-arrow").style.display = 'none';
		document.getElementById("hot-arrow").style.display = 'none';
	}

	if (val > 100 || val < 1) {
		removeMessages();
		removeDial();
		/*alert("Make sure to enter a number between 1 and 100");*/
		/*document.getElementById("Right").style.display='none';
		document.getElementById("tooHigh").style.display='none';
		document.getElementById("tooHigh-warmer").style.display='none';
		document.getElementById("tooHigh-colder").style.display='none';
		document.getElementById("tooLow").style.display='none';
		document.getElementById("tooLow-warmer").style.display='none';
		document.getElementById("tooLow-colder").style.display='none';
		document.getElementById("Nan").style.display='none';*/
		document.getElementById("out-of-range").style.display='block';
		document.getElementById("cold-arrow").style.display = 'inline-block';
		/*document.getElementById("right-arrow").style.display = 'none';
		document.getElementById("hot-arrow").style.display = 'none';*/
	}
	
	else if (val == randomNumber) {
			/*alert("Congratulations, you chose right!");
		document.getElementsByClassName("output-message").style.display='none';*/
		removeMessages();
		removeDial();
		document.getElementById("Right").style.display='block';
		document.getElementById("hot-arrow").style.display = 'inline-block';
		document.getElementById("right-arrow").style.display = 'none';
		document.getElementById("cold-arrow").style.display = 'none';
		/*var Correct = document.createTextNode("Congratulations, you choose right!");
		outSpace.appendChild(Correct);	*/
	}
	else if (current > randomNumber) {
			/*if (current=previous) {
				alert("You're too high. Try again!")
			}*/
			removeMessages();
			removeDial();
			if(Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
				document.getElementById("tooHigh-warmer").style.display='block';
				/*alert("You're warmer, but choose too high. Try again!");*/
				document.getElementById("right-arrow").style.display = 'inline-block';
				/*document.getElementById("hot-arrow").style.display = 'none';
				document.getElementById("cold-arrow").style.display = 'none';*/
			}
			else if (Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
				document.getElementById("tooHigh-colder").style.display='block';
				/*alert("You choose too high and are even colder. Try again.");
				document.getElementById("right-arrow").style.display = 'none';
				document.getElementById("hot-arrow").style.display = 'none';*/
				document.getElementById("cold-arrow").style.display = 'inline-block';

			}
			else{
				document.getElementById("tooHigh").style.display='block';
				/*alert("Too high! Try again.");
				document.getElementById("right-arrow").style.display = 'none';
				document.getElementById("hot-arrow").style.display = 'none';*/
				document.getElementById("cold-arrow").style.display = 'inline-block';
			}
	}
	else if (current < randomNumber) {
			/*if(current=previous){
				alert("You're too low. Try again!")
			}*/
			removeMessages();
			removeDial();
			if(Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
				/*alert("You're warmer, but choose too low. Try again!");*/
				document.getElementById("tooLow-warmer").style.display='block';
				document.getElementById("right-arrow").style.display = 'inline-block';
				/*document.getElementById("hot-arrow").style.display = 'none';
				document.getElementById("cold-arrow").style.display = 'none';*/
			}
			else if (Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
				document.getElementById("tooLow-colder").style.display='block';
				/*alert("Too low and even colder :( . Try again!");
				document.getElementById("right-arrow").style.display = 'none';
				document.getElementById("hot-arrow").style.display = 'none';*/
				document.getElementById("cold-arrow").style.display = 'inline-block';
			}
			else{
				document.getElementById("tooLow").style.display='block';
				/*alert("Too low! Try again!");
				document.getElementById("right-arrow").style.display = 'none';
				document.getElementById("hot-arrow").style.display = 'none';*/
				document.getElementById("cold-arrow").style.display = 'inline-block';
			}
	}
	
	else {
			removeMessages();
			removeDial();
			/*alert("Make sure to enter a NUMBER (not a word!) between 1 and 100");
			document.getElementById("right-arrow").style.display = 'none';
			document.getElementById("hot-arrow").style.display = 'none';*/
			document.getElementById("NaN").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
	}
};	
		/*var outSpace = document.getElementById("outputSpace");
		var tooHigh = document.createTextNode("Sorry, your number is too high! Try again.");
		outSpace.appendChild(tooHigh);
		outSpace.replaceChild(outOfRange);*/
/*	}

/*	else if (current == NaN){
		alert("Make sure to enter a NUMBER between 1 and 100");
	}

/*	else {
		var outSpace = document.getElementById("outputSpace");
		var tooLow = document.createTextNode("Sorry, your number is too low! Try again.");
		outSpace.appendChild(tooHigh);
	}
}

var firstChoice = prompt("Pick a number, any number from 1 to 100!", 0);
	if (firstChoice > 100 || firstChoice < 1) {
		console.log("Please make sure your number is between 1 and 100")
	}
	else if (firstChoice == randomNumber){
		console.log("You're right!");
	}
	else if (firstChoice > randomNumber) {
		console.log("Too high!");
		//firstChoice?
	}
	else {
		console.log("Too low!");
		//firstChoice?
	*/
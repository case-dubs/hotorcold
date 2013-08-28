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
			document.getElementById("out-of-range").style.display='none';
		};

	var removeDial = function () {
		document.getElementById("right-arrow").style.display = 'none';
		document.getElementById("cold-arrow").style.display = 'none';
		document.getElementById("hot-arrow").style.display = 'none';
	};

	if (val > 100 || val < 1) {
		removeMessages();
		removeDial();
		document.getElementById("out-of-range").style.display='block';
		document.getElementById("cold-arrow").style.display = 'inline-block';
	}
	
	else if (val == randomNumber) {
		removeMessages();
		removeDial();
		document.getElementById("Right").style.display='block';
		document.getElementById("hot-arrow").style.display = 'inline-block';
		document.getElementById("right-arrow").style.display = 'none';
		document.getElementById("cold-arrow").style.display = 'none';
	}
	
	else if (current > randomNumber) {
		removeMessages();
		removeDial();
		if(current != previous && Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
			document.getElementById("tooHigh-warmer").style.display='block';
			document.getElementById("right-arrow").style.display = 'inline-block';
		}
		else if (Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
			document.getElementById("tooHigh-colder").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
		else{
			document.getElementById("tooHigh").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
	}
	
	else if (current < randomNumber) {
		removeMessages();
		removeDial();
		if(Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-warmer").style.display='block';
			document.getElementById("right-arrow").style.display = 'inline-block';
		}
		else if (Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-colder").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
		else{
			document.getElementById("tooLow").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
	}
	
	else {
		removeMessages();
		removeDial();
		document.getElementById("NaN").style.display='block';
		document.getElementById("cold-arrow").style.display = 'inline-block';
	}
};	
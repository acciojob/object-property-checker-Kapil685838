const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let arrOfKeys = Object.keys(sampleObject); //["red", "green", "white"];
	return arrOfKeys.includes(key); 
}

// Do not change the code below
// const key = prompt("Enter Key.");
alert(hasKey(key));

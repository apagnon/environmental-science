var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/environmental_science.jpg') {
		myImage.setAttribute ('src', 'images/environmental_science2.jpg');
	} else {
		myImage.setAttribute ('src', 'images/environmental_science.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Environmental Science, ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Environmental Science, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
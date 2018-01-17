//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';


//Bytter bildet når man klikker på det
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/forside.jpg') {
      myImage.setAttribute ('src','images/landscape.jpg');
    } else {
      myImage.setAttribute ('src','images/forside.jpg');
    }
}


//Personlig velkomstbeskjed
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hvordan har du det i dag ' + myName + '?';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hvordan har du det i dag ' + storedName + '?';
}

myButton.onclick = function() {
  setUserName();
}


//10.0.0.101


/*
Everything in between is a comment.
*/

// Or this is a comment

// koden under vil vise en pop-up boks på siden hvor man må trykke ok. 
//var iceCream = 'chocolate';
//if (iceCream === 'chocolate') {
//  alert('Yay, I love chocolate ice cream!'); /*'alert' lager pop-up boksen*/   
//} else {
//  alert('Awwww, but chocolate is my favorite...');    
//}

//function multiply(num1,num2) {
//  var result = num1 * num2;
//  return result;
//}

//multiply(4,7);
//multiply(20,20);
//multiply(0.5,3);
console.clear();

let showResult = document.getElementById('showResult');
let upperCased = document.getElementById('uppercase');
console.log(upperCased);
let lowerCased = document.getElementById('lowercase');
console.log(lowerCased); 
let numbers = document.getElementById('number');
let symbols = document.getElementById('symbol');
let sliderValue = document.getElementById('slider');
let showSliderValue = document.getElementById('showSliderValue')
let letters = "abcdefghijklmnopqrstuvwxyz";
let uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbstring = "1234567890";
let symbolstring = "~`!@#$%^&*()_-+={[}]|':<>?/";

 showSliderValue.innerHTML = sliderValue.value;
//interactive slider 
 sliderValue.oninput = function() { 
     showSliderValue.innerHTML = this.value; 
 }
function myFunction() { 
    //randomNumbers();
    //randomLowercase(); 
    //randomUppercase(); 
    //randomSymbols(); 
    generatePassword(); 
}

function generatePassword () {
    let password = ""; 
    if (upperCased.checked == true) { 
        password += uLetters;
        console.log(password);
    }
    if (lowerCased.checked == true) { 
        password += (letters);
        console.log(password);
    }
    if (numbers.checked == true) { 
        password += (numbstring);
        console.log(password);
    }
    if (symbols.checked == true) { 
        password += (symbolstring);
        console.log(password);
    }

    let RandomPass = "";
    for (var i=0; i < sliderValue.value; i++) { 
        let generate = password[Math.floor(Math.random()*password.length)]; 
        console.log(generate);
        RandomPass += generate;
        console.log(RandomPass); 
        if (RandomPass == "undefined") {
            return alert("Aye man check some boxes")
        }
        
    }
    showResult.innerHTML=RandomPass;

}

/*

//let showResult=document.getElementById('showResult').innerHTML;
console.log(showResult);

function randomLowercase() { 
    let sliderValue = document.getElementById('slider').value;
    //console.log(sliderValue); 

    let letters = "abcdefghijklmnopqrstuvwxyz";

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = letters[Math.floor(Math.random()*26)]; 
        //console.log(generate);
        password += generate;
        //console.log(password); 
    }
    showResult.innerHTML=password;
}

function randomUppercase() { 
    let sliderValue = document.getElementById('slider').value;
    console.log(sliderValue); 

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = letters[Math.floor(Math.random()*letters.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
    
}


function randomNumbers() { 
    let numbers = "1234567890";
    let sliderValue = document.getElementById('slider').value;

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = numbers[Math.floor(Math.random()*numbers.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
}

function randomSymbols() { 
    let symbols = "~`!@#$%^&*()_-+={[}]|':<>?/";
    let sliderValue = document.getElementById('slider').value;

    let password = "";
    for (var i=0; i < sliderValue; i++) { 
        let generate = symbols[Math.floor(Math.random()*symbols.length)]; 
        console.log(generate);
        password += generate;
        console.log(password); 
    }
}

*/ 
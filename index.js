var current = 0;
var rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]
function changeColor() {


var color = document.getElementById("changecolor");
color.style.backgroundColor = rainbow[current];

if(current > rainbow.length){   // if current is greater than array length
    current = 0; 				// it then resets to zero
    } else {						// otherwise
     current++;				// current value increased by 1
    }
}

// when the color reaches the end, it requires 3 button clicks to loop back to start, which i don't entirely understand yet. 
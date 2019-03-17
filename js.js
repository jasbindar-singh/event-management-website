var i = 0;
var btn = document.querySelector("#careerbtn");
var check = true;
var images = ["images/one.jpg", "images/five.jpg", "images/four.jpg", "images/three.jpg", "images/two.jpg"];

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", 2000);
}
window.onload=changeImg;


setInterval(function(){
    if(check) {
        btn.style.color = "#8b1cff";
    }
    else{
        btn.style.color = "#b0b0b0";
    }
    check = !check;
}, 1000);
var j = 0;
var career = ["images/career2.jpg", "images/career3.jpg"];
var check = true;
var career = ["images/career2.jpg", "images/career3.jpg"];
var btn = document.querySelector("#careerbtn");
function changeImg2(){
	document.careerimg.src = career[j];
	if(j < career.length - 1){
	  j++; 
	} else { 
		j = 0;
	}
	setTimeout("changeImg2()", 2000);
}
window.onload=changeImg2;

setInterval(function(){
    if(check) {
        btn.style.color = "#8b1cff";
    }
    else{
        btn.style.color = "#b0b0b0";
    }
    check = !check;
}, 1000);
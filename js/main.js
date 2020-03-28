console.log("IT's just the beginning")




/*----------------mettre texte italique----------------------*/
function italique(){
	if(document.getElementById("feedback").style.fontStyle==="italic"){
	document.getElementById("feedback").style.fontStyle="normal";
}else{
document.getElementById("feedback").style.fontStyle="italic";
}
}

/*----------------mettre texte gras---------------------------*/
function gras(){	
	if(document.getElementById("feedback").style.fontWeight==="bold"){
	document.getElementById("feedback").style.fontWeight="normal";
}
else{
document.getElementById("feedback").style.fontWeight="bold";
}
}
/*----------------souligner le texte----------------------*/
function souligner(){
	if(document.getElementById("feedback").style.textDecoration==="underline"){
	document.getElementById("feedback").style.textDecoration="none";
}else{
document.getElementById("feedback").style.textDecoration="underline";
}
}
/*----------------changer taille de text----------------------*/
function fcttaille(){
	
	document.getElementById("feedback").style.fontSize=document.getElementById("myselect").value;	
}
/*----------------changer style de text----------------------*/
function forme(){
	
	document.getElementById("feedback").style.fontFamily=document.getElementById("myselect2").value;	
}
/*-----------------jquery------------------------------------*/

$(document).ready(function(){
$(".course1").hover(function(){
    $("#boutton1").toggle();
});
});

$(document).ready(function(){
$(".course2").hover(function(){
    $("#boutton2").toggle();
});
});

$(document).ready(function(){
$(".course3").hover(function(){
    $("#boutton3").toggle();
});
});

$(document).ready(function(){
$(".course4").hover(function(){
    $("#boutton4").toggle();
});
});

$(document).ready(function(){
$(".course5").hover(function(){
    $("#boutton5").toggle();
});
});

$(document).ready(function(){
$(".course6").hover(function(){
    $("#boutton6").toggle();
});
});

$(document).ready(function(){
$(".course7").hover(function(){
    $("#boutton7").toggle();
});
});

$(document).ready(function(){
$(".course8").hover(function(){
    $("#boutton8").toggle();
});
});

$(document).ready(function(){
$(".course9").hover(function(){
    $("#boutton9").toggle();
});
});
/*------------------------------------------------------------*/


/*-----carousel vitesse-----*/
$(document).ready(function(){
  // Activate Carousel with a specified interval
  $("#demo").carousel({interval: 5000});
        
});



/*
$(document).ready(function(){
$(".boutton1").click(function(){
    $(".boutton9").toggle();
});
});*/

<<<<<<< HEAD
$(".projectobj").hover(function () {
    $(this).toggleClass("projectobj_show");
    $(this.button).toggleClass("button_show")
=======
var currtnt_p = 0;

$("#p1").click(function(){
	currtnt_p=1;
	$(".slideshow").css("display","block");
	$("#c1").css("display","block");
	$(".content__close").css("opacity","1");
});

$("#p2").click(function(){
	currtnt_p=2;
	$(".slideshow").css("display","block");
	$("#c2").css("display","block");
	$(".content__close").css("opacity","1");
});

$("#p3").click(function(){
	currtnt_p=3;
	$(".slideshow").css("display","block");
	$(".slideshow").css("display","block");
	$("#c3").css("display","block");
	$(".content__close").css("opacity","1");
});

$("#p4").click(function(){
	currtnt_p=4;
	$(".slideshow").css("display","block");
	$("#c4").css("display","block");
	$(".content__close").css("opacity","1");
});

$("#p5").click(function(){
	currtnt_p=5;
	$(".slideshow").css("display","block");
	$("#c5").css("display","block");
	$(".content__close").css("opacity","1");
});

$(".content__close").click(function(){
	switch (currtnt_p){
		case 1:
			$("#c1").css("display","none");
			break;
		case 2:
			$("#c2").css("display","none");
			break;
		case 3:
			$("#c3").css("display","none");
			break;
		case 4:
			$("#c4").css("display","none");
			break;
		case 5:
			$("#c5").css("display","none");
			break;
		default:
			break;

	}
	$(".content__close").css("opacity","0");
	$(".slideshow").css("display","none");
>>>>>>> dev
});
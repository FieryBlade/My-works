var e_flap=document.getElementsByClassName("envelope_flap");
var e_flap_border=document.getElementsByClassName("envelope_flap_border");
var letter=document.getElementsByClassName("letter");
var letter_up=document.getElementsByClassName("letter_up");
var letter_down=document.getElementsByClassName("letter_down");
var f=true;
function open()
{
	e_flap[0].style.transform="rotate3d(1,0,0,180deg)";
	e_flap_border[0].style.opacity="0.1";
	letter[0].style.transition="ease-out 0.5s";
	window.setTimeout(open_letter,200);
}
function open_letter()
{
	//alert("Opening");
	e_flap[0].style.zIndex = 1;
	letter[0].style.top="-60%";
	window.setTimeout(fwd,200);
	window.setTimeout(roll,500);
}
function fwd()
{
	letter[0].style.zIndex = 3;
}
function roll(){
	letter_down[0].style.transform="rotate3d(1,0,0,180deg)";
}
function close_letter()
{
	letter[0].style.transition="z-index 0s , top 0.5s";
	letter_down[0].style.transform="rotate3d(1,0,0,-180deg)";
	letter[0].style.zIndex = 2;
	letter[0].style.top="10%";
	window.setTimeout(close,700);
}
function close()
{
	e_flap[0].style.zIndex = 4;
	e_flap[0].style.transform="rotate3d(1,0,0,-0deg)";
	e_flap_border[0].style.opacity="1";
	//alert("Closed");
}
function play()
{
	if(f)
	{
		open();
	}
	else
	{
		close_letter();
	}
	f=!f;
}
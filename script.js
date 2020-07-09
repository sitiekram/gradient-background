var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("body");
var css=document.getElementsByTagName("h3")[0];
var btnboth=document.getElementById("both");
var btnleft=document.getElementById("left");
var btnright=document.getElementById("right");
var btnswap=document.getElementById("swap");
var gradientType="linear-gradient(to right," ;
var radio=document.querySelectorAll(".radio");

function setGradient()
{
   body.style.background= gradientType + color1.value +"," + color2.value +")";
   css.textContent = body.style.background + ";";	
}
/*function setVerticalGradient()
{
   body.style.background="linear-gradient(to bottom," + color1.value +"," + color2.value +")";
   css.textContent = body.style.background + ";";	
}
function setRadialGradient()
{
   body.style.background="radial-gradient(" +color1.value +"," + color2.value +")";
   css.textContent = body.style.background + ";";	
}
function setDiagonallrGradient()
{
   body.style.background="linear-gradient(to bottom right," + color1.value +"," + color2.value +")";
   css.textContent = body.style.background + ";";	
}
function setDiagonalrlGradient()
{
   body.style.background="linear-gradient(to top left," + color1.value +"," + color2.value +")";
   css.textContent = body.style.background + ";";	
}*/
function getRandomColor()
{
	var letters="0123456789ABCDEF";
	var rancolor="#";
	for(var i=0;i<6;i++)
	{
		rancolor+=letters[Math.floor(Math.random()*16)];
	}
	return rancolor;
}
setGradient();
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
btnboth.addEventListener("click",function(){
     color1.value=getRandomColor();
     color2.value=getRandomColor();
     setGradient();
});
btnleft.addEventListener("click",function(){
     color1.value=getRandomColor();
     setGradient();
});
btnright.addEventListener("click",function(){
	color2.value=getRandomColor();
	setGradient();
});
btnswap.addEventListener("click",function()
	{
		var swap=color1.value;
		color1.value=color2.value;
		color2.value=swap;
		setGradient();
	});
radio[0].addEventListener("click",function()
{
	gradientType= "linear-gradient(to right," ;
	btnleft.textContent="Random Left";
	btnright.textContent="Random Right";
	setGradient();
});
radio[1].addEventListener("click",function()
{
	gradientType= "linear-gradient(to bottom," ;
	btnleft.textContent="Random Top";
	btnright.textContent="Random Bottom";
	setGradient();
});
radio[2].addEventListener("click",function()
{
	gradientType="radial-gradient(";
	btnleft.textContent="Random Center";
	btnright.textContent="Random Edge";
	setGradient();
});
radio[3].addEventListener("click",function()
{
	gradientType= "linear-gradient(to bottom right,";
	btnleft.textContent="Random Top";
	btnright.textContent="Random Bottom";
	setGradient();
});
radio[4].addEventListener("click",function()
{
	gradientType= "linear-gradient(to top left,";
	btnleft.textContent="Random Top";
	btnright.textContent="Random Button";
	setGradient();
})

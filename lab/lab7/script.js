
function start()
{
	var button = document.getElementById("lab7");
	button.addEventListener("click",displayVolume,false);
}

function displayVolume() 
{
	document.getElementById('word').innerHTML = 'Welcome!';
}
window.addEventListener("load",start,false);
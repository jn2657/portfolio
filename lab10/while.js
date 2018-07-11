
var i = 1;
var j = 1;
var msg = '';
  while (i<10) {
  	j = 1;
  	var d = "d"+i;
  	msg = '';
  	while(j<10){
  		msg += i + 'x' + j + '=' + (j*i) + '<br />'; 
  		j++;
  		document.getElementById(d).innerHTML = msg;
  	}
		
		i++;
	}

noc = false;

function night(){	
	
	if (noc) {
			document.getElementById("mode").innerHTML = 'NOČNÍ MÓD<link rel="stylesheet" href="../day.css">';
			noc = false;
			 }
	else
	{
			document.getElementById("mode").innerHTML = 'DENNÍ MÓD<link rel="stylesheet" href="../night.css">';
			noc = true;
	}
	
}

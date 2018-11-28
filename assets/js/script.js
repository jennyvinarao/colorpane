
	

	function changeRow(num) {
		var clm = ('col-' + num);
		document.getElementById('box1').classList='';
		document.getElementById('box2').classList='';
		document.getElementById('box3').classList='';
		document.getElementById('box4').classList='';
		document.getElementById('box5').classList='';
		document.getElementById('box6').classList='';
		document.getElementById('box7').classList='';
		document.getElementById('box8').classList='';
		document.getElementById('box9').classList='';
		document.getElementById('box10').classList='';
		document.getElementById('box11').classList='';
		document.getElementById('box12').classList='';


		document.getElementById('box1').classList.add(clm);
		document.getElementById('box2').classList.add(clm);
		document.getElementById('box3').classList.add(clm);
		document.getElementById('box4').classList.add(clm);
		document.getElementById('box5').classList.add(clm);
		document.getElementById('box6').classList.add(clm);
		document.getElementById('box7').classList.add(clm);
		document.getElementById('box8').classList.add(clm); 
		document.getElementById('box9').classList.add(clm);
		document.getElementById('box10').classList.add(clm);
		document.getElementById('box11').classList.add(clm);
		document.getElementById('box12').classList.add(clm);
	}

	document.getElementById('men1').onclick = function() {
		document.getElementById('drow').style.display = 'flex';
		changeRow(12);
	}
	document.getElementById('men2').onclick = function() {
		changeRow(6);
	}

	document.getElementById('men3').onclick = function() {
		changeRow(4);
	}
	document.getElementById('men4').onclick = function() {
		changeRow(3);
	}
	document.getElementById('men5').onclick = function() {
		changeRow(2);
	}
	document.getElementById('men6').onclick = function() {
		changeRow(1);
	}


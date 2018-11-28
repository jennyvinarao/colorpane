
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


	function changeStyle(bar) {
		// document.getElementById('box1').style.backgroundColor ='';
		// document.getElementById('box2').style.backgroundColor ='';
		// document.getElementById('box3').style.backgroundColor ='';
		// document.getElementById('box4').style.backgroundColor ='';
		// document.getElementById('box5').style.backgroundColor ='' ;
		// document.getElementById('box6').style.backgroundColor ='';
		// document.getElementById('box7').style.backgroundColor ='';
		// document.getElementById('box8').style.backgroundColor ='' ;
		// document.getElementById('box9').style.backgroundColor ='';
		// document.getElementById('box10').style.backgroundColor ='';
		// document.getElementById('box11').style.backgroundColor ='';
		// document.getElementById('box12').style.backgroundColor ='';

		var	sty = ('bg' + bar)
		document.getElementById('box1').classList.add(sty);
		document.getElementById('box2').classList.add(sty) ;
		document.getElementById('box3').classList.add(sty) ;
		document.getElementById('box4').classList.add(sty) ;
		document.getElementById('box5').classList.add(sty) ;
		document.getElementById('box6').classList.add(sty) ;
		document.getElementById('box7').classList.add(sty) ;
		document.getElementById('box8').classList.add(sty) ;
		document.getElementById('box9').classList.add(sty) ;
		document.getElementById('box10').classList.add(sty);
		document.getElementById('box11').classList.add(sty);
		document.getElementById('box12').classList.add(sty);

	}

	document.getElementById('men1').onclick = function() {
		document.getElementById('drow').style.display = 'flex';
		changeRow(12);
		changeStyle(6);
		
	}
	document.getElementById('men2').onclick = function() {
	document.getElementById('drow').style.display = 'flex';
		changeRow(6);
		changeStyle(1);
	}

	document.getElementById('men3').onclick = function() {
	document.getElementById('drow').style.display = 'flex';
		changeRow(4);
		changeStyle(2);
	}
	document.getElementById('men4').onclick = function() {
		document.getElementById('drow').style.display = 'flex';
		changeRow(3);
		changeStyle(3);
	}
	document.getElementById('men5').onclick = function() {
		document.getElementById('drow').style.display = 'flex';
		changeRow(2);
		changeStyle(4);
	}
	document.getElementById('men6').onclick = function() {
		document.getElementById('drow').style.display = 'flex';
		changeRow(1);
		changeStyle(5);
	}


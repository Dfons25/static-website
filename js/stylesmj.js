		ug = 50;
		tp = 50;
		wd = 50;
		he = 50;
		br = 50;
		brl = 30;
				
		function resetm() {
			limw = document.getElementById("limites").clientWidth;
		if(ug>limw-wd){ug=limw-wd; document.getElementById("quadrado").style.left = (ug+'px');change();}
			
			limh = document.getElementById("limites").clientHeight;
		if(tp>limh-he){tp=limh-he; document.getElementById("quadrado").style.left = (tp+'px');change();}
		}			
				
		function reset() {
		ug = 50;
		tp = 50;
		wd = 50;
		he = 50;
		br = 50;
		brl = 30;
		document.getElementById("quadrado").style.top = (tp+'px');
		document.getElementById("quadrado").style.left = (tp+'px');change();
		document.getElementById("quadrado").style.height = (he+'px');
		document.getElementById("quadrado").style.width = (wd+'px');
		document.getElementById("limites").style.borderRadius = (brl+'px');
		document.getElementById("quadrado").style.borderRadius = (br+'px');
		}		
				
		function morebr() {
		if(br<91){
		br = br + 10;
		document.getElementById("quadrado").style.borderRadius = (br+'px');change();}
		if(br<21){brl=br;document.getElementById("limites").style.borderRadius = (brl+'px');}
		if(br>10){document.getElementById('nm').innerHTML = "Bola";}
		}
		
		function lessbr() {
		if(br>9){
		br = br - 10;brl=br;
		document.getElementById("quadrado").style.borderRadius = (br+'px');change();}
		if(br<21){brl=br;document.getElementById("limites").style.borderRadius = (brl+'px');}
		if(br==10){document.getElementById('nm').innerHTML = "Quadrado";}
		}
		
		function more() { limw = document.getElementById("limites").clientWidth;
		if((ug+50)<limw-wd){
		wd = wd + 50;
		document.getElementById("quadrado").style.width = (wd+'px');change();}
		}
		
		function less() {
		if(wd>50){
		wd = wd - 50;
		document.getElementById("quadrado").style.width = (wd+'px');change();}
		}
		
		function moreh() { var limh = document.getElementById("limites").clientHeight;
		if((tp+50)<limh-he){
		he = he + 50;
		document.getElementById("quadrado").style.height = (he+'px');change();}
		}
		
		function lessh() {
		if(he>50){
		he = he - 50;
		document.getElementById("quadrado").style.height = (he+'px');change();}
		}		
		
		function left() {
		if((ug-50)>0){
		ug = ug - 50;
			document.getElementById("quadrado").style.left = (ug+'px');change();}
			else
		{ug = 0;document.getElementById("quadrado").style.left = (ug+'px');change();}}
			
		function right() { limw = document.getElementById("limites").clientWidth;
		if((ug+50)<limw-wd){
		ug = ug + 50;
			document.getElementById("quadrado").style.left = (ug+'px');change();}
			else
		{ug = limw-wd;document.getElementById("quadrado").style.left = (ug+'px');change();}}
			
		function topp() {
		if((tp-50)>0){
		tp = tp - 50;
			document.getElementById("quadrado").style.top = (tp+'px');change();}
			else
		{tp = 0;document.getElementById("quadrado").style.top = (tp+'px');change();}}
			
		function bt() { var limh = document.getElementById("limites").clientHeight;
		if((tp+50)<limh-he){
		tp = tp + 50;
			document.getElementById("quadrado").style.top = (tp+'px');change();}
			else
		{tp = limh-he;document.getElementById("quadrado").style.top = (tp+'px');change();}}
			
		function chred(value) {
			document.getElementById('vr').innerHTML = value;
			changecolor();
		}	
		
		function chblue(value) {
			document.getElementById('vb').innerHTML = value;
			changecolor();
		}	
		
		function chgreen(value) {
			document.getElementById('vg').innerHTML = value;
			changecolor();
		}	
			
		function chalp(value) {
			document.getElementById('ph').innerHTML = value;
			changecolor();
		}		
			
		function changecolor() {
		var r = document.getElementById('vr').innerHTML;
		var g = document.getElementById('vg').innerHTML;
		var b = document.getElementById('vb').innerHTML;
		var ph = document.getElementById('ph').innerHTML
		document.getElementById('quadrado').style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + ph + ")";
		}	
			
		function change() {
		document.getElementById('testt').innerHTML = tp;
		document.getElementById('testl').innerHTML = ug;
		document.getElementById('testh').innerHTML = he;
		document.getElementById('testw').innerHTML = wd;
		document.getElementById('testbr').innerHTML = br;
		}


		function check_empty(){
			
		if(document.getElementById('name').value == "" 
		|| document.getElementById('email').value == "" 
		||document.getElementById('msg').value == ""){
		alert ("Preencha todos os campos");
		}
			else {  
			checke();
			if (a==0){
			alert ("Mensagem enviada com sucesso");}
			div_hide();
			}
		}


		function div_show(){ 
		document.getElementById('abc').style.display = "block";
		}


		function div_hide(){ 
		document.getElementById('abc').style.display = "none";
		}

		function checke() {

			var email = document.getElementById('email');
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			a = 0;
			if (!filter.test(email.value)) {
			alert('O e-mail não é válido');a = 1;
			
		}}
	
function gup(){ 
document.getElementById('ttop').style.bottom = 0;
}
function gdw(){ 
document.getElementById('ttop').style.bottom = "-25px";
}


window.onscroll = function() {myFunction()};

function myFunction() {	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById('ttop').style.display = "block";}
		else{
		document.getElementById('ttop').style.display = "none";
		}
}
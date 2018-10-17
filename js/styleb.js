
window.onscroll = function() {myFunction()};

function myFunction() {	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById('ttop').style.display = "block";}
		else{
		document.getElementById('ttop').style.display = "none";
		}
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
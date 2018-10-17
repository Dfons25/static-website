
			



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
	
			
		function linha() {
			var tbl = document.getElementById('tabela'), 
				linha = tbl.insertRow(tbl.rows.length),      
				i;

			for (i = 0; i < tbl.rows[0].cells.length; i++) {
				celula(linha.insertCell(i), i, 'linha');change();    
			}
	//document.getElementById('cdtxt').innerHTML = document.getElementById('cdtxt').innerHTML + "<xmp><tr></tr></xmp>";
		}
		 
		function celula(cell, text, style) {
			var div = document.createElement('div'), 
				txt = document.createTextNode(text); 
			div.appendChild(txt);                   
			div.setAttribute('class', style);        
			div.setAttribute('className', style);    
			cell.appendChild(div);               
		}


		function coluna() {
			var tbl = document.getElementById('tabela'), 
				i;

			for (i = 0; i < tbl.rows.length; i++) {
				celula(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'Coluna');
			}change(); 
		}

		function dellinha() {
			var tbl = document.getElementById('tabela'), 
				lastRow = tbl.rows.length - 1;       
				if (lastRow > 0){
				tbl.deleteRow(lastRow);
				}change(); 
		}
		 

		function delcoluna() {
			var tbl = document.getElementById('tabela'), 
				    lastCol = tbl.rows[0].cells.length - 1,   
        i, j;
			if (lastCol > 0){
			for (i = 0; i < tbl.rows.length; i++) {
	
					tbl.rows[i].deleteCell(lastCol);
		
		}}change(); 
		}
		
function deltd1() {
    var tbl = document.getElementById('tabela'), 
        lastRow = tbl.rows.length - 1,             
        i;

    for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}
 

function deltd2() {
    var tbl = document.getElementById('tabela'), 
        lastCol = tbl.rows[0].cells.length - 1,   
        i, j;
   
    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }document.getElementById('cdtxt').innerHTML = "";
}


		function change() {

		    var tbl = document.getElementById('tabela'), 
        lastCol = tbl.rows[0].cells.length, i, j;
		document.getElementById('cdtxt').innerHTML = "<xmp><table></xmp>";
		for (i = 0; i < tbl.rows.length; i++) {document.getElementById('cdtxt').innerHTML = document.getElementById('cdtxt').innerHTML + "<xmp><tr></xmp>";
			for (j = lastCol; j > 0; j--) { 
				document.getElementById('cdtxt').innerHTML = document.getElementById('cdtxt').innerHTML + "<xmp><td></td></xmp>";
			}document.getElementById('cdtxt').innerHTML = document.getElementById('cdtxt').innerHTML + "<xmp></tr></xmp>";
		}document.getElementById('cdtxt').innerHTML = document.getElementById('cdtxt').innerHTML + "<xmp></table></xmp>";
		

		}
		
		
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
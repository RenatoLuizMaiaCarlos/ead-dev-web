<<<<<<< HEAD
/* USANDO JQUERY */

function abrirJanela(){
	
	var n1 = 2;
	var n2 = 2;
	var yellowContent  = document.getElementById("ret2");
	
	window.alert("testand;o window alert");
	yellowContent.innerHTML = (n1 + n2) + 1;
	
	var texto = document.getElementById("texto");
	
	var tempo = new Date();
	var hora = tempo.getHours();
	
	if(hora >= 18){
		texto.innerHTML = "noite";
	}else{
		texto.innerHTML = "dia";
	}
}

$(document).ready(function(){
	$(".retangulo").on({
		
		mouseenter: function(){
			$(this).css("background-color","lightgray");
		},
		mouseleave: function(){
			$(this).css("background-color","lightblue");
		},
		click: function(){
			$(this).css("background-color","yellow");
		}
	});
});
=======
/* USANDO JQUERY */

function abrirJanela(){
	
	var n1 = 2;
	var n2 = 2;
	var yellowContent  = document.getElementById("ret2");
	
	window.alert("testand;o window alert");
	yellowContent.innerHTML = (n1 + n2) + 1;
	
	var texto = document.getElementById("texto");
	
	var tempo = new Date();
	var hora = tempo.getHours();
	
	if(hora >= 18){
		texto.innerHTML = "noite";
	}else{
		texto.innerHTML = "dia";
	}
}

$(document).ready(function(){
	$(".retangulo").on({
		
		mouseenter: function(){
			$(this).css("background-color","lightgray");
		},
		mouseleave: function(){
			$(this).css("background-color","lightblue");
		},
		click: function(){
			$(this).css("background-color","yellow");
		}
	});
});
>>>>>>> 991c469cce99b1390bd145f31fa3d96755099aaa

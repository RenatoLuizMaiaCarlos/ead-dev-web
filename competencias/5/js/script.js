/* USANDO JQUERY */

function abrirJanela(){
	
	var n1 = 2;
	var n2 = 2;
	var yellowContent  = document.getElementById("ret2");
	
	//*window.alert("testand;o window alert");
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

	/* $("#ret1").click(function(){
		$(this).hide("slow").slideDown();
	});
	$("#ret2").click(function(){
		$(this).hide("fast").slideUp();
	});
	$("#ret3").click(function(){
		$(this).hide(5000);
	}); */

	$("button").click(function(){
		$("#ret1").animate({
			left:'350px',
			opacity:'0,9',
			height:'150',
			width:'150'
		});

		$("em").click(function(){$("#ret0").css("background-color","red").slideUp(1500).slideDown(2000);
	});
	});
});
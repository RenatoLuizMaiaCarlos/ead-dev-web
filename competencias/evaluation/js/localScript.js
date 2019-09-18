function register(){
	var  status = confirm("Confirmar Cadastro !");
	var output;
	if(status==true){
		var name = document.getElementById("InputName").value;
		alert("Cadastro de "+name+" realizado com Sucesso");
	}else{
		alert("cadastro não realizado, tente novamente");
	}
}
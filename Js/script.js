/*JAVASCRIPT PAGINA INICIAL*/
function redirecionarUm(){
	if(document.getElementById("nomeUm").value == ""){
		alert('Por favor, preencha o campo.');
		document.getElementById("nomeUm").focus();
	}
	else{
		window.location.replace("Jogos/primeiro_ano/pagina_primeiro_ano.html");
	} 
}
		
function redirecionarDois(){
	if(document.getElementById("nomeDois").value == ""){
		alert('Por favor, preencha o campo.');
		document.getElementById("nomeDois").focus();
	}
	else{
		window.location.replace("Jogos/segundo_ano/pagina_segundo_ano.html");
	} 
}
function redirecionarTres(){
	if(document.getElementById("nomeTres").value == ""){
		alert('Por favor, preencha o campo.');
		document.getElementById("nomeTres").focus();
	}
	else{
		window.location.replace("Jogos/terceiro_ano/pagina_terceiro_ano.html");
	} 
}
function redirecionarQuatro(){
	if(document.getElementById("nomeQuatro").value == ""){
		alert('Por favor, preencha o campo.');
		document.getElementById("nomeQuatro").focus();
	}
	else{
		window.location.replace("Jogos/quarto_ano/pagina_quarto_ano.html");
	} 
}
function redirecionarCinco(){
	if(document.getElementById("nomeCinco").value == ""){
		alert('Por favor, preencha o campo.');
		document.getElementById("nomeCinco").focus();
	}
	else{
		window.location.replace("Jogos/quinto_ano/pagina_quinto_ano.html");
	} 
}
function myfunction(){	
	window.location.href = "sequencia_numerica.html"		 
}

$('document').ready(function(){
        	var audio = document.getElementById("audio"); 
        	audio.play();
    	});

audio = document.getElementById('audio');	
		function mute(){

        	if( audio.muted ){
           		audio.muted = false;
           		$('#icon_mute').removeClass('fa-volume-mute');
           		$('#icon_mute').addClass('fa-volume-down');
        	}else{
            	audio.muted = true;
            	$('#icon_mute').removeClass('fa-volume-down');
           		$('#icon_mute').addClass('fa-volume-mute');
       		}
   		} 




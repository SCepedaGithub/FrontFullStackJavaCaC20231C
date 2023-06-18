function calcularTicket(){
	const valorTicket = 200;
	let descEstudiante = 0.2;
	let descTrainee = 0.5;
	let descJunior = 0.85;
	let opcion = document.getElementById("categoria").value;
	let cantidad = parseInt(document.getElementById("cantidad").value);
	let totalResumen = 0;
	
	switch(opcion){
		case "estudiante":
		totalResumen = valorTicket * descEstudiante * cantidad;
		break;
		case "trainee":
		totalResumen = valorTicket * cantidad * descTrainee;
		break;
		case "junior":
		totalResumen = valorTicket * cantidad * descJunior;
		break;
		default:
		totalResumen = valorTicket * cantidad;
	}
	
	document.getElementById("totalAPagar").innerHTML = "Total a pagar $ " + totalResumen;
}
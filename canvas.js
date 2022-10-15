function dibujarCanvas(){
	tablero.lineWidth = 8;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "black";
	tablero.strokeStyle = "#8a3871";

	tablero.fillRect(0,0,1200,860);
	tablero.beginPath();
	tablero.moveTo(650, 500);
	tablero.lineTo(400, 500);
	tablero.stroke();
	tablero.closePath();

}

function dibujarLinea(){
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#f3f5f6";
	tablero.strokeStyle = "#8a3871";

	let anchura = 600/palabraSecreta.length;
	for (let i = 0; i < palabraSecreta.length; i++) {
		tablero.moveTo(300 + (anchura * i), 640)
		tablero.lineTo(350 + (anchura * i), 640)
	}

	tablero.stroke();
	tablero.closePath();

}

function escribirLetraCorrecta(index){
	tablero.font = 'bold 63px inter';
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#0a3871";
	
	let anchura = 600/palabraSecreta.length
	tablero.fillText(palabraSecreta[index],305+(anchura*index),620)
	tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorsLeft){
	tablero.font = 'bold 40px inter';
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#0a3871";
	tablero.fillText(letra,405+(40*(10-errorsLeft)), 720,40)

}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    if(puntaje===8){
    //poste lateral
    tablero.moveTo(500,500)
    tablero.lineTo(500,100)
    }
    if(puntaje===7){//teto 
    tablero.moveTo(650,100)
    tablero.lineTo(500,100)
    }
    if(puntaje===6){//corda
    tablero.moveTo(650,100)
    tablero.lineTo(650,171)
    }
    if(puntaje===5){//para cara
    tablero.moveTo(700,230)
    tablero.arc(650,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//para corpo
    tablero.moveTo(650,389)
    tablero.lineTo(650,289)
    }
    if(puntaje===3){//para perna izquerda
    tablero.moveTo(650,389)
    tablero.lineTo(600,450)
    }
    if(puntaje===2){//para perna direita
    tablero.moveTo(650,389)
    tablero.lineTo(690,450)
    }
    if(puntaje===1){//para mão izquerda
    tablero.moveTo(650,330)
    tablero.lineTo(600,389)
    }
    if(puntaje===0){//para mão direita
    tablero.moveTo(650,330)
    tablero.lineTo(690,389)
    }
    tablero.stroke()
    tablero.closePath()
  }

function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del juego!",930,320)
  }

  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste,",950,320)
    tablero.fillText("Felicidades!",930,360)
   
  }

  function recargar(){
    location.reload(); 
  }

  
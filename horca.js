let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "RUMPELSTILTSKIN"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;
let numeroDeErrores = 8;
let letraElegida = [];
let letrasIncorrectas = [];
let clic = 1;


//PALABRA SECRETA
function escojerPalabraSecreta(){
	let palabra = palabras[Math.floor(Math.random() * palabras.length)]
	palabraSecreta = palabra
	console.log(palabraSecreta)
}

function comprobarLetra(key){
	let estado = false
	if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
		letras.push(key)
		console.log(key)
		return estado
	}else{
		estado = true
		console.log(key)
		return estado
	}
}

function anadirLetraIncorrecta(){
	errores -= 1
	console.log(errores)
}

function verificarFinJuego(letra) {
  //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
 if(letraElegida.length < palabraSecreta.length) { 
    //incluye las letras ya digitadas en el arrau
    letrasIncorrectas.push(letra);
    

    //valida se el usuário cometió el numero maximo de errores
    if (letrasIncorrectas.length > numeroDeErrores) {
      perdiste()
    }
    else if(letraElegida.length < palabraSecreta.length) {
      anadirLetraIncorrecta(letra)
      escribirLetraIncorrecta(letra, errores)
    }
  }
 } 

//Verifica si el usuario ha ganado
function verificarVencedor(letra) {
  letraElegida.push(letra.toUpperCase());
  if (letraElegida.length == palabraSecreta.length) {

    ganaste()
    
  }

}

function iniciarJuego(){
	document.getElementById("iniciar-juego").style.display = "none";
	escojerPalabraSecreta()
	dibujarCanvas()
	dibujarLinea()
	

	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase()

		if (comprobarLetra(letra) && palabraSecreta.includes(letra)){
			for (let i = 0; i < palabraSecreta.length; i++) {
				if (palabraSecreta[i] === letra){
					escribirLetraCorrecta(i)
					verificarVencedor(letra)
				}
			}
		}else{
			dibujarAhorcado(errores)
			verificarFinJuego(letra)
		}

	}



	if(clic==1){

   document.getElementById("new-game").style.height = "60px";
   document.getElementById("new-game").style.width = "120px";

   document.getElementById("surrender").style.height = "60px";
   document.getElementById("surrender").style.width = "100px";
  

   } 


}

function newGame(){
  iniciarJuego(errores = 8, letras = [], numeroDeErrores = 8, letraElegida = [], letrasIncorrectas = [] )

}
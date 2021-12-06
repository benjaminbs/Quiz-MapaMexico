const statesMexico = document.querySelectorAll("._state");
const quizState = document.querySelector('#_questionState');
const msgQuestion = document.querySelector('#_msgQuestion');
const btnRestart = document.querySelector('#_btnRestart');
const modal = document.querySelector('#myModal');
const numStates = document.querySelector('#_numStates')

let numQuestion;

const STATES={
	0: 'Aguascalientes',
	1: 'Baja California',
	2: 'Baja California Sur',
	3: 'Campeche',
	4: 'Chiapas	',
	5: 'Chihuahua',
	6: 'CDMX',
	7: 'Coahuila',
	8: 'Colima',
	9: 'Durango',
	10: 'Guanajuato',
	11: 'Guerrero',
	12: 'Hidalgo',
	13: 'Jalisco',
	14: 'Estado de México',
	15: 'Michoacán',
	16: 'Morelos',
	17: 'Nayarit',
	18: 'Nuevo León',
	19: 'Oaxaca',
	20: 'Puebla',
	21: 'Querétaro',
	22: 'Quintana Roo',
	23: 'San Luis Potosí',
	24: 'Sinaloa',
	25: 'Sonora',
	26: 'Tabasco',
	27: 'Tamaulipas',
	28: 'Tlaxcala',
	29: 'Veracruz',
	30: 'Yucatán',
	31: 'Zacatecas'
}

let newSTATE =[]

const Message = (msg) =>{
		msgQuestion.style.display = 'block';
		msgQuestion.innerHTML = msg
}

const startQuiz = () =>{
	modal.style.display = 'none'
	msgQuestion.style.display = 'none';
	newSTATE = []
	statesMexico.forEach(el => el.classList.remove('stateOk'));
	numQuestion = Math.floor(Math.random() * Object.keys(STATES).length);
	_questionState.innerHTML = STATES[numQuestion]
	numStates.innerHTML = 'Estados restantes: 0/32'
}

const newQuestion = () =>{
	if(newSTATE.length <32){
		do{
			numQuestion = Math.floor(Math.random() * Object.keys(STATES).length);
			console.log(newSTATE.includes(numQuestion.toString()))
		}while(newSTATE.includes(numQuestion.toString()) == true);
		_questionState.innerHTML = STATES[numQuestion]
		numStates.innerHTML = 'Estados restantes: ' + newSTATE.length + '/32'
	}else{
		modal.style.display = 'block'
	}
		
}

const finishQuiz = () =>{

}

const checkState = (estado)  =>{
	if(parseInt(estado.id) === numQuestion){
		estado.classList.add("stateOk");
		newSTATE.push(estado.id)
		Message('Muy bien, continue con los demás estados.');
		newQuestion();
	}else{
		Message('El estado seleccionado no corresponde al indicado.')
		newQuestion();
	}

	
}



const registerEventHandlers = () => {
	window.addEventListener('load',startQuiz)
	statesMexico.forEach(el => el.addEventListener('click', event =>{
		checkState(el)
	}));
	btnRestart.addEventListener('click',startQuiz)
}

registerEventHandlers();
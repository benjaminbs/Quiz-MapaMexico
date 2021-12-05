const statesMexico = document.querySelectorAll("._state");
const quizState = document.querySelector('#_questionState');

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

const startQuiz = () =>{
	numQuestion = Math.floor(Math.random() * Object.keys(STATES).length);
	_questionState.innerHTML = STATES[numQuestion]
}

const restartQuiz = () =>{
	if(newSTATE.length <32){
		do{
			numQuestion = Math.floor(Math.random() * Object.keys(STATES).length);
			console.log(newSTATE.includes(numQuestion.toString()))
		}while(newSTATE.includes(numQuestion.toString()) == true);
		_questionState.innerHTML = STATES[numQuestion]
	}else{
		alert("Ha terminado")
	}
		
}


const getValueState = (estado)  =>{
	if(parseInt(estado.id) === numQuestion){
		console.log('bien');
		estado.classList.add("stateOk");
		newSTATE.push(estado.id)
		console.log(newSTATE)
		restartQuiz();
	}else{
		console.log('mal');
		restartQuiz();
	}

	
}

const efectto = (aaa) =>{

}


const registerEventHandlers = () => {
	window.addEventListener('load',startQuiz)
	statesMexico.forEach(el => el.addEventListener('click', event =>{
		getValueState(el)
	}));
	/*statesMexico.forEach(el => el.addEventListener('mouseover', event =>{
		efectto(el)
	}));
	statesMexico.forEach(ela => ela.addEventListener('mouseout', event =>{
		efecttoaa(ela)
	}));*/
}




registerEventHandlers();
const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];
function appendtask(element) {
	let varClick=true;
	const varLi = document.createElement('li');
	document.querySelector('ul').appendChild(varLi);
	varLi.textContent = element;
	varLi.addEventListener('click', function (event) {
		if (varClick){
			varLi.classList.add('done');
			varClick=false;
		}
		else{
			varLi.classList.remove('done');
			varClick=true;
		}

	});

}
tasks.forEach(appendtask);

const varLi = document.querySelector('li');





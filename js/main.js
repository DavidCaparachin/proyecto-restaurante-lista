// Obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');

links.forEach(function (link) {
	// Agregar un evento click a cada uno de ells - case sencillo
	link.addEventListener('click', function (ev) {
		ev.preventDefault();
		let content = document.querySelector('.content');
		//Quitarle las clases de animacion que ya tiene
		content.classList.remove('animate__fadeIn');
		content.classList.remove('animate__animated');
		//Agregar clases para animar su salida fadeOutUp
		content.classList.add('animate__fadeOutUp');
		content.classList.add('animate__animated');
		setTimeout(function () {
			location.href = '/boletines';
		}, 600);

		return false;
	});
});

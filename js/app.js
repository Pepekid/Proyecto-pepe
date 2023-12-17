const btn = document.querySelector('.boton');
const tituloOculto = document.querySelector('.titulo');

btn.addEventListener('click', descubrir);

function descubrir() {
	console.log('hola');

	if (tituloOculto.classList.contains('descubrir')) {
		tituloOculto.classList.remove('descubrir');
		tituloOculto.classList.add('ocultar');
		return;
	}
	tituloOculto.classList.add('descubrir');
	tituloOculto.classList.remove('ocultar');
}

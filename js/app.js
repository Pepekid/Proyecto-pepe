const btn = document.querySelector('.btn');
tituloOculto = document.querySelector('.titulo');

btn.addEventListener('click', descubrir);

function descubrir() {
	if (tituloOculto.classList.contains('descubrir')) {
		tituloOculto.classList.remove('descubrir');
		tituloOculto.classList.add('ocultar');
		return;
	}
	tituloOculto.classList.add('descubrir');
	tituloOculto.classList.remove('ocultar');
}

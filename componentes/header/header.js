(function () {
  console.log('header.js cargado');

  const barra = document.querySelector('header > ul');
  const desplegable = document.querySelector('.desplegable');
  const lista = document.querySelector('.lista-menu');

  if (!barra || !desplegable || !lista) {
    console.error('header.js: no encontré el menú', { barra, desplegable, lista });
    return;
  }

  window.addEventListener('scroll', () => {
    barra.classList.toggle('scrolled', window.scrollY > 50);
  });

  desplegable.addEventListener('click', () => {
    lista.classList.toggle('abierta');
    console.log('clic en el menú, abierta =', lista.classList.contains('abierta'));
  });
})();
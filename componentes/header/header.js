(function () {
  const barra = document.querySelector('header > ul');
  const boton = document.querySelector('.desplegable');
  const lista = document.querySelector('.lista-menu');

  if (!barra || !boton || !lista) return;

  function abrir(estado) {
    lista.classList.toggle('abierta', estado);
    boton.setAttribute('aria-expanded', estado);
  }

  // Barra negra al bajar
  function revisarScroll() {
    barra.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', revisarScroll);
  revisarScroll();

  // Abrir y cerrar con el botón
  boton.addEventListener('click', (e) => {
    e.stopPropagation();
    abrir(!lista.classList.contains('abierta'));
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!lista.contains(e.target)) abrir(false);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      abrir(false);
      boton.focus();
    }
  });

  // Marca en negrita la página donde estás
  lista.querySelectorAll('a').forEach((a) => {
    if (a.pathname === location.pathname) a.setAttribute('aria-current', 'page');
  });
})();
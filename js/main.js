async function cargar(nombre) {
  const lugar = document.getElementById(nombre);
  if (!lugar) return;

  try {
    // 1. CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `/componentes/${nombre}/${nombre}.css`;
    document.head.append(css);

    // 2. HTML
    const respuesta = await fetch(`/componentes/${nombre}/${nombre}.html`);
    if (!respuesta.ok) throw new Error(`No se encontró ${nombre}.html`);
    let html = await respuesta.text();

    // Quita el script que Live Server mete solo en desarrollo
    html = html.replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, '');

    lugar.innerHTML = html;

    // 3. JS
    const js = document.createElement('script');
    js.src = `/componentes/${nombre}/${nombre}.js`;
    document.body.append(js);

  } catch (error) {
    console.error(`Falló el componente "${nombre}":`, error);
  }
}

cargar('header');
cargar('footer');
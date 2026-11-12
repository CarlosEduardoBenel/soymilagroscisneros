const id = new URLSearchParams(location.search).get("id");
const terapia = Object.hasOwn(TERAPIAS, id) ? TERAPIAS[id] : null;

const titulo = document.querySelector("#t-titulo");
const imagen = document.querySelector("#t-imagen");
const detalles = document.querySelector("#t-detalles");
const descripcion = document.querySelector("#t-descripcion");
const boton = document.querySelector("#t-boton");
const contenedorSecciones = document.querySelector("#t-secciones");

function crear(etiqueta, texto) {
    const el = document.createElement(etiqueta);
    el.textContent = texto;
    return el;
}

function crearTexto(parrafos, clases) {
    const caja = document.createElement("div");
    caja.className = clases;
    parrafos.forEach((p) => caja.append(crear("p", p)));
    return caja;
}

function crearSeccion(seccion) {
    const bloque = document.createElement("section");
    bloque.className = "bloque";
    bloque.append(crear("h2", seccion.titulo));

    // Texto antes de la lista
    if (seccion.intro) {
        bloque.append(crearTexto(seccion.intro, "bloque-nota bloque-intro"));
    }

    // Texto corrido en recuadro
    if (seccion.parrafos) {
        bloque.append(crearTexto(seccion.parrafos, "bloque-texto"));
    }

    // Frases sueltas → lista; {titulo, texto} → tarjetas
    if (seccion.items?.length) {
        const esTarjeta = typeof seccion.items[0] === "object";
        const lista = document.createElement("ul");
        lista.className = esTarjeta ? "tarjetas" : "lista-simple";

        seccion.items.forEach((item) => {
            const li = document.createElement("li");
            if (typeof item === "string") {
                li.textContent = item;
            } else {
                li.append(crear("h3", item.titulo), crear("p", item.texto));
            }
            lista.append(li);
        });

        bloque.append(lista);
    }

    // Texto después de la lista
    if (seccion.cierre) {
        bloque.append(crearTexto(seccion.cierre, "bloque-nota bloque-cierre"));
    }

    return bloque;
}

if (!terapia) {
    titulo.textContent = "No encontramos esa terapia";
    descripcion.textContent = "Vuelve a la lista para elegir una de las terapias disponibles.";
    imagen.remove();
    detalles.remove();
    boton.hidden = true;
} else {
    document.title = `${terapia.nombre} | Milagros Cisneros`;
    titulo.textContent = terapia.nombre;
    imagen.src = terapia.imagen;
    imagen.alt = terapia.nombre;

    (terapia.detalles || []).forEach((d) => detalles.append(crear("li", d)));
    terapia.descripcion.forEach((texto) => descripcion.append(crear("p", texto)));
    (terapia.secciones || []).forEach((s) => contenedorSecciones.append(crearSeccion(s)));

    boton.href = `/citas.html?terapia=${encodeURIComponent(id)}`;
}
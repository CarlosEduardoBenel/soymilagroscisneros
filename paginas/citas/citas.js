const preseleccion = new URLSearchParams(location.search).get("terapia");

if (preseleccion) {
    document.querySelector("#terapia").value = preseleccion;
}

const formulario = document.querySelector(".registro form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const codigo = document.querySelector("#codigo").value;
    const mensajePersonal = document.querySelector("#mensaje").value.trim();

    // Deja solo dígitos en el número (quita espacios, guiones y paréntesis)
    const numero = document.querySelector("#whatsapp").value.replace(/\D/g, "");

    const terapia = document.querySelector("#terapia");
    const terapiaSeleccionada = terapia.options[terapia.selectedIndex].text;

    let mensaje = `Hola Milagros, mi nombre es *${nombre}*.

Me gustaría solicitar una cita para la terapia: *${terapiaSeleccionada}*.`;

    // Solo se agrega si la persona escribió algo
    if (mensajePersonal) {
        mensaje += `

Esto es lo que me gustaría trabajar:
${mensajePersonal}`;
    }

    mensaje += `

Mi correo es: ${correo}
Mi WhatsApp es: ${codigo} ${numero}`;

    const numeroMilagros = "13477692551";
    const enlaceWhatsApp =
        `https://wa.me/${numeroMilagros}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlaceWhatsApp, "_blank", "noopener");
});
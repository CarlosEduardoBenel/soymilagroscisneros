const formulario = document.querySelector(".registro form");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const whatsapp = document.querySelector("#whatsapp").value;
    const terapia = document.querySelector("#terapia");
    const mensajePersonal = document.querySelector("#mensaje").value;

    const terapiaSeleccionada =
        terapia.options[terapia.selectedIndex].text;

    const mensaje = `Hola Milagros, mi nombre es *${nombre}*.

Me gustaría solicitar una cita para la terapia: *${terapiaSeleccionada}*.

Cuéntanos, si deseas, qué te gustaría trabajar:
*${mensajePersonal}*

Mi correo es: *${correo}*
Mi WhatsApp es: *${whatsapp}*`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const numeroMilagros = "13477692551";

    const enlaceWhatsApp =
        `https://wa.me/${numeroMilagros}?text=${mensajeCodificado}`;

    window.open(enlaceWhatsApp, "_blank");
});

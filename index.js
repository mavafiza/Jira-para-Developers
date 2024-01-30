// Establece la fecha límite
let countDownDate = new Date("feb 07, 2024 17:30:00").getTime();

// Actualiza la cuenta regresiva cada segundo
let x = setInterval(function () {

    // Obtiene la fecha y hora actual
    let now = new Date().getTime();

    // Calcula la diferencia entre la fecha límite y la fecha actual
    let distance = countDownDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra los resultados en los elementos correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Ya llegó el 15 de abril!";
    }
}); // cierra la función setInterval y la llave de la función anónima



// src="ruta_a_pdf.js"
//     // Ruta al archivo PDF
//     const pdfPath = './assets/roadMapToJira.pdf';

//     // Variables
//     let currentPage = 1;
//     const pdfContainer = document.getElementById('pdf-container');
//     const prevPageButton = document.getElementById('prev-page');
//     const nextPageButton = document.getElementById('next-page');

//     // Carga del PDF
//     pdfjsLib.getDocument(pdfPath).promise.then(pdfDoc => {
//         const numPages = pdfDoc.numPages;

//         // Inicialización
//         const canvas = document.getElementById('pdf-viewer');
//         const context = canvas.getContext('2d');

//         // Función para renderizar la página actual
//         const renderPage = pageNum => {
//             pdfDoc.getPage(pageNum).then(page => {
//                 const viewport = page.getViewport({ scale: 1.5 });
//                 canvas.height = viewport.height;
//                 canvas.width = viewport.width;

//                 const renderContext = {
//                     canvasContext: context,
//                     viewport: viewport
//                 };

//                 page.render(renderContext);
//             });
//         };

//         // Renderizar la primera página
//         renderPage(currentPage);

//         // Evento para la página anterior
//         prevPageButton.addEventListener('click', () => {
//             if (currentPage > 1) {
//                 currentPage--;
//                 renderPage(currentPage);
//             }
//         });

//         // Evento para la página siguiente
//         nextPageButton.addEventListener('click', () => {
//             if (currentPage < numPages) {
//                 currentPage++;
//                 renderPage(currentPage);
//             }
//         });
//     });
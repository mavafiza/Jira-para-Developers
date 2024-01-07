// Establece la fecha límite
let countDownDate = new Date("Jan 19, 2024 17:30:00").getTime();

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

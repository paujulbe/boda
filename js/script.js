// Botones de la web
document.getElementById('amazon',).addEventListener('click', () => {
    window.open("https://www.amazon.es/hz/wishlist/ls/311IHY455T9WA?ref_=wl_share")
});
document.getElementById('form',).addEventListener('click', () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdfd6FbgoX3PHxVi7Ush7xkvn8oTgskfZgpBppKB3DInNCUoQ/viewform")
});
document.addEventListener("click", function () {
    document.getElementById("aviso").style.opacity = "0";
    setTimeout(() => document.getElementById("aviso").remove(), 500);
});


// Musica de fondo
document.body.addEventListener('click', () => {
    const music = document.getElementById('backgroundMusic');
    music.play();
}, { once: true });



// Google Calendar
const event = {
    text: 'Boda Pau y Ana',
    dates: '20250426T150000Z/20250426T220000Z',
    details: '¡Nos casamos! ¡No te lo pierdas!',
    location: "L'Arcada Campaments, Sant Miquel de campajor, Girona, España",
};

const generateCalendarURL = (event) => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(event.text)}` +
        `&dates=${encodeURIComponent(event.dates)}` +
        `&details=${encodeURIComponent(event.details)}` +
        `&location=${encodeURIComponent(event.location)}`;
};

document.getElementById('add-event').addEventListener('click', () => {
    const calendarURL = generateCalendarURL(event);
    window.open(calendarURL, '_blank');
});
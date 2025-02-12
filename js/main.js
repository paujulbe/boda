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
  document.body.addEventListener('click', () => {
    const music = document.getElementById('backgroundMusic');
    music.play();
  }, { once: true });
  document.addEventListener("DOMContentLoaded", () => {

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const glideOptions = {
      type: 'carousel',
      autoplay: 3000,
      focusAt: 'center',
      keyboard: true,
      gap: isMobile ? 100 : 30, 
      perView: isMobile ? 2 : 2 , 
    };

    new Glide('.glide', glideOptions).mount();

    if (isMobile) {
      confetti({
        particleCount: 500,
        spread: 8000,
        origin: { x: 0.5, y: 0.9 },
      });
    } else {
      confetti({
        particleCount: 1600,
        spread: 10000,
        origin: { x: 1, y: 0.9 },
      });
      confetti({
        particleCount: 1000,
        spread: 10000,
        origin: { x: 0, y: 0.9 },
      });
    }
  });

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
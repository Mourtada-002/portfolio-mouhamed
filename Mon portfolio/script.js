 // La partie Contact pour la confirmation
 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page après l'envoi du formulaire
    alert("Message envoyé !"); // Affiche une alerte lorsque le formulaire est soumis
    });


//Pour l'animation des section.
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150; // Distance avant d'afficher l'élément

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active'); // facultatif si tu veux que ça disparaisse quand on repart
    }
  }
}
window.addEventListener('scroll', revealOnScroll);


//Animation des elements de nav aux differentes sections
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// enviar correo
const btn = document.getElementById("button");
const form = document.getElementById("form");

window.onload = function () {
  emailjs.init("wnBpZLdftA09_3-7A");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerText = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_ikbhsmx";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        setTimeout(() => {
          btn.innerText = "Enviado ✔";
        }, 1000);
        setTimeout(() => {
          btn.innerText = "Enviar";
        }, 1001);
        form.reset();
      },
      (err) => {
        btn.innerText = "Enviar";
        console.log(JSON.stringify(err));
      }
    );
  });
};

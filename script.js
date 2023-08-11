// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
// enviar correo
const btn = document.getElementById("button");
const form = document.getElementById("form");
// Show more projects
let showMore = document.getElementById("btn-show-projects");
let sectionProjects = document.getElementById("projects");
let hide = true;
// fetch proyects
const proyects = document.getElementById("proyects-container");
// Current year
const currentYear = document.getElementById("current-year");

// Current year
currentYear.innerText = new Date().getFullYear();

// fetch proyects
fetch("json/proyects.json")
  .then((res) => res.json())
  .then((data) => {
    createCard(data);
  })
  .catch((error) => console.error("Error al cargar el archivo JSON:", error));

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
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
window.onload = function () {
  emailjs.init(API_URL_EMAILJS);

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

// Show more projects
showMore.onclick = () => {
  sectionProjects.classList.toggle("show-projects");
  hide = !hide;
  showMore.innerHTML = hide
    ? `<i class='bx bx-chevrons-down'></i> Ver más`
    : `<i class='bx bx-chevrons-up'></i> Ver menos`;
};

function createCard(data) {
  data.cards.forEach((proyect) => {
    proyects.innerHTML += `
      <article class="proyect__item">
        <a
          title="${proyect.title}"
          href="${proyect.url}"
          target="_blank">
          <img
            title="${proyect.title}"
            loading="lazy"
            src="${proyect.image}"
            alt="${proyect.alt_image}}"
          />
        </a>

        <div class="proyect__item__content">
          <h3>${proyect.title}</h3>
          <p>${proyect.description}</p>
          <div class="proyect__item__content__actions">
            <a
              title="Ver proyecto"
              href="${proyect.url}"
              target="_blank"
              class="btn"
              >Ver proyecto</a
            >
            <a
              title="Ver código fuente"
              href="${proyect.repository}"
              target="_blank"
              >Repositorio</a
            >
          </div>
        </div>
      </article>
    `;
  });
}

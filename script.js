const cover = document.getElementById("cover");
const paper = document.getElementById("paper");
const openEdition = document.getElementById("openEdition");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const pageCounter = document.getElementById("pageCounter");
const pages = [...document.querySelectorAll(".page")];

let currentPage = 0;

function updatePage() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

  pageCounter.textContent = `Folha ${["I", "II", "III", "IV", "V"][currentPage]} de V`;
  previous.disabled = currentPage === 0;
  next.disabled = currentPage === pages.length - 1;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showEdition() {
  cover.hidden = true;
  paper.classList.add("visible");
  paper.setAttribute("aria-hidden", "false");
  currentPage = 0;
  updatePage();
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
}

openEdition.addEventListener("click", showEdition);
next.addEventListener("click", nextPage);
previous.addEventListener("click", previousPage);

document.addEventListener("keydown", (event) => {
  if (!paper.classList.contains("visible")) return;

  if (event.key === "ArrowRight") nextPage();
  if (event.key === "ArrowLeft") previousPage();
});

paper.addEventListener("click", (event) => {
  if (event.target.closest("button, audio")) return;

  const half = window.innerWidth / 2;

  if (event.clientX > half) {
    nextPage();
  } else {
    previousPage();
  }
});

let startX = 0;

paper.addEventListener("touchstart", (event) => {
  startX = event.changedTouches[0].screenX;
}, { passive: true });

paper.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].screenX;
  const distance = endX - startX;

  if (Math.abs(distance) < 50) return;

  if (distance < 0) {
    nextPage();
  } else {
    previousPage();
  }
}, { passive: true });

updatePage();

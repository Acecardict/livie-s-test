// Fade-in animation on scroll
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

function thankYou() {
  alert(
    "Thank you for supporting Livie's Care Initiative 💗\nTogether, we are promoting dignity and menstrual hygiene for girls in Kano State."
  );
}
// Show More toggle
const showMoreBtn = document.getElementById("show-more-btn");
const aboutFull = document.getElementById("about-full");

showMoreBtn.addEventListener("click", () => {
  if (aboutFull.style.display === "none") {
    aboutFull.style.display = "block";
    showMoreBtn.textContent = "Show Less";
  } else {
    aboutFull.style.display = "none";
    showMoreBtn.textContent = "Show More";
  }
});

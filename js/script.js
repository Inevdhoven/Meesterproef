// Scroll Animation Tekst
// Source https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Light/Dark Theme 
// Source https://codepen.io/adhuham/pen/BaNroxd
const btn = document.querySelector("header button");
const alert = document.querySelector("header div");
const alertClose = document.querySelector("header div svg");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    btn.classList.toggle("light-theme");
    alert.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    btn.classList.toggle("light-theme");
    alert.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

// Tips
const hotspots = document.querySelectorAll('.hotspot');
const tips = document.querySelectorAll('.tip');
const close = document.querySelectorAll('.tip svg')

hotspots[0].addEventListener('click', function() {
    tips[0].classList.toggle('show-tip');
});

hotspots[1].addEventListener('click', function() {
    tips[1].classList.toggle('show-tip');
});

hotspots[2].addEventListener('click', function() {
    tips[2].classList.toggle('show-tip');
});

hotspots[3].addEventListener('click', function() {
    tips[3].classList.toggle('show-tip');
});

hotspots[4].addEventListener('click', function() {
    tips[4].classList.toggle('show-tip');
});

close[0].addEventListener('click', function() {
    tips[0].classList.toggle('show-tip');
});

close[1].addEventListener('click', function() {
    tips[1].classList.toggle('show-tip');
});

close[2].addEventListener('click', function() {
    tips[2].classList.toggle('show-tip');
});

close[3].addEventListener('click', function() {
    tips[3].classList.toggle('show-tip');
});

close[4].addEventListener('click', function() {
    tips[4].classList.toggle('show-tip');
});

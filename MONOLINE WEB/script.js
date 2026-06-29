/*========================================
MONOLINE CLONE
JavaScript
=========================================*/

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

/*========================================
AOS Animation
=========================================*/

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

/*========================================
Sticky Navbar
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*========================================
Scroll To Top
=========================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*========================================
Smooth Scrolling
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*========================================
Counter Animation
=========================================*/

const counters = document.querySelectorAll(".counter");

const speed = 150;

const startCounter = () => {
  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target") || +counter.innerText;

      const current = +counter.innerText;

      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);

        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };

    counter.innerText = "0";

    update();
  });
};

const counterSection = document.querySelector(".counter-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter();

      observer.disconnect();
    }
  });
});

if (counterSection) {
  observer.observe(counterSection);
}

/*========================================
Active Navigation
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
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

/*========================================
Portfolio Hover Effect
=========================================*/

const portfolio = document.querySelectorAll(".portfolio-item");

portfolio.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0px)";
  });
});

/*========================================
Typing Effect
=========================================*/

const text = "Creative Digital Agency";

const typing = document.querySelector(".typing");

if (typing) {
  let i = 0;

  function type() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);

      i++;

      setTimeout(type, 120);
    }
  }

  type();
}

/*========================================
Navbar Collapse on Mobile
=========================================*/

const navItems = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

/*========================================
Preloader
=========================================*/

window.onload = function () {
  const loader = document.querySelector(".preloader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
};

/*========================================
Current Year
=========================================*/

const year = document.querySelector("#year");

if (year) {
  year.innerHTML = new Date().getFullYear();
}

/*========================================
Navbar Shadow
=========================================*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/*========================================
Image Fade Animation
=========================================*/

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.loading = "lazy";
});

/*========================================
End
=========================================*/
const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let count = 0;
        const speed = target / 100;

        function update() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        }

        update();

    });

}

const section = document.querySelector(".counter-section");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        startCounter();

    }

});

window.addEventListener("scroll",function(){

    let navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
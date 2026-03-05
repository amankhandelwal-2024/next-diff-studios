document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('.navbar_link, .button[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {

      const href = this.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      e.stopImmediatePropagation(); // 👈 This kills Webflow delay

      const target = document.querySelector(href);
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 90,
        behavior: "smooth"
      });

    }, true); // 👈 use capture phase to override Webflow

  });

});
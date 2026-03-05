document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {
      e.preventDefault();

      const id = this.getAttribute("href");

      if (id.length < 2) return;

      const target = document.querySelector(id);
      if (!target) return;

      // kill any running scroll animations
      gsap.killTweensOf(window);

      // force refresh before scroll
      ScrollTrigger.refresh(true);

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 90
        },
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto"
      });

    });

  });

});
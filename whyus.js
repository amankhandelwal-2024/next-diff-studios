
document.addEventListener("DOMContentLoaded", function () {

  lucide.createIcons();

  const cards = gsap.utils.toArray(".features-animate .feature-card");

  // Set safe initial state
  gsap.set(cards, { opacity: 0, y: 60 });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".features-animate",
      start: "top 85%",
      once: true
    }
  });

});

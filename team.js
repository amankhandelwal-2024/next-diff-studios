document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});
  // Smooth, premium scroll reveal using ScrollTrigger.batch
  const cards = gsap.utils.toArray('.team-card');

  // set initial state
  gsap.set(cards, { y: 40, opacity: 0, scale: 0.98 });

  ScrollTrigger.batch(cards, {
    start: 'top 85%',
    interval: 0.12, // time window to batch
    batchMax: 6,
    onEnter: batch => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: { each: 0.12 }
      });
      // gentle image parallax/scale reveal per card
      batch.forEach(card => {
        const img = card.querySelector('img');
        if (img) gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.2, ease: 'power3.out' });
      });
    },
    onLeaveBack: batch => {
      gsap.to(batch, { y: 40, opacity: 0, scale: 0.98, duration: 0.6, ease: 'power3.in', stagger: 0.06 });
    }
  });
  // Slight hover lift for a premium feel (preserve from earlier)
  gsap.utils.toArray('.team-card').forEach(card => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, boxShadow: '0 20px 40px rgba(10,10,10,0.12)', duration: 0.35 }));
    card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, boxShadow: '0 8px 20px rgba(10,10,10,0.06)', duration: 0.45 }));
  });
  gsap.fromTo(".section-header",
     {
     opacity: 0,
     y: 100,
     scale: 0.95
    },
    {
     opacity: 1,
     y: 0,
     scale: 1,
     duration: 1.4,
     ease: "power3.out",
     scrollTrigger: {
         trigger: ".section_team",
         start: "top 75%",
        }
    }
    );

    

    gsap.to(".about-image", {
       y: -80,
      ease: "none",
      scrollTrigger: {
         trigger: ".section_about",
         start: "top bottom",
         end: "bottom top",
         scrub: true
        }
    });

});


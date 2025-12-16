function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco()

function animateHeader() {
  const tl = gsap.timeline();

  tl.from([".top-bar", ".search-bar", ".main-nav"], {
    y: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.from(".top-bar *, .search-bar *, .main-nav h4", {
    y: -20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.06,
    ease: "power2.out",
  });
}

function animatePage1() {
  const tl = gsap.timeline();

  tl.from(".page1", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.out",
  })
}

function animatePage2() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".features span", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });

  tl.from(".page2-content h1", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".categories button", {
    x: -40,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.out",
  });

  tl.from(".cards .card", {
    y: 60,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    ease: "power2.out",
  });

  tl.from(".shop-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

function animatePage3() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page3 h1", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".page3-card", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
  });
}

function animatePage4() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page4 h1", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".page4-left", {
    x: -80,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  tl.from(".page4-card", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
  });
}

function animatePage5() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page5", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.from(".page5-box", {
    y: -60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    ease: "power2.out",
  });
}

function animatePage6() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page6",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page6 h1", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".page6-card", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

function animatePage7() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page7",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page7 h1, .page7 h4", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  });

  tl.from(".page7-card", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".page7-main-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

function animatePage8() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page8",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page8-left", {
    x: -80,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  tl.from(".page8-right > *", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });
}

function animatePage9() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page9",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".img9", {
    x: -80,
    scale: 0.6,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.from(".page9-content > *", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });
}

function animatePage10() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page10",
      scroller: "main",
      start: "top 70%",
    },
  });

  tl.from(".page10 h1, .page10 h4", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  });

  tl.from(".page10-card", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(".page10-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

function animateFooter() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      scroller: "main",
      start: "top 80%",
    },
  });

  tl.from(".footer-left > *, .footer-right > *", {
    y: -60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
  });

  tl.from(".footer-bottom", {
    y: 40,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

animateHeader();
animatePage1();
animatePage2();
animatePage3();
animatePage4();
animatePage5();
animatePage6();
animatePage7();
animatePage8();
animatePage9();
animatePage10();
animateFooter();


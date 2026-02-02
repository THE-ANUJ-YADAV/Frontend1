const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// ---------------- PAGE LOAD ANIMATION ----------------

function firstPageAnim() {

  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -20,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut"
  })

  .to(".boundingelem", {
    y: 0,
    duration: 1.8,
    ease: "expo.inOut",
    delay: -1,
    stagger: 0.2
  })

  .from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.2,
    delay: -1,
    ease: "expo.inOut"
  });

}

firstPageAnim();

// ---------------- MINI CURSOR ----------------

window.addEventListener("mousemove", function (dets) {

  document.querySelector("#minicircle").style.transform =
    `translate(${dets.clientX}px, ${dets.clientY}px)`;

});

// ---------------- HOVER IMAGE EFFECT ----------------

document.querySelectorAll(".elem").forEach(function (elem) {

  const img = elem.querySelector("img");
  var rotate = 0;
  var different = 0;

  elem.addEventListener("mousemove", function (dets) {

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    different = dets.clientX - rotate;
    rotate = dets.clientX
    
    gsap.to(img, {
      opacity:1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20,20, different * 0.5)
    });

  });

})

document.querySelectorAll(".elem").forEach(function (elem) {

  const img = elem.querySelector("img");
  var rotate = 0;
  var different = 0;

  elem.addEventListener("mouseleave", function (dets) {

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    different = dets.clientX - rotate;
    rotate = dets.clientX
    
    gsap.to(img, {
      opacity:0,
      ease: Power3,
      duration : 0.5,
    });

  });

})
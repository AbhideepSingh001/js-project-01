// Loader function-> it contains all the controls animations of the loader function.
function loaderFunction() {
    var t1 = gsap.timeline()
    t1.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.4,
        delay: 0.5
    })
    t1.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5 = document.querySelector('#line1-part1 h5')
            var grow = 0

            setInterval(function () {
                if (grow <= 100) {
                    h5.innerHTML = grow++
                } else {
                    grow = 100
                }
            }, 35)
        }
    })
    t1.to('.line h2', {
        animationName: 'now-animate',
        opacity: 1
    })


    t1.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 3.5
    })

    t1.from("#page1", {
        delay: 0.2,
        y: 1800,
        opacity: 0,
        duration: 0.5,
        ease: Power4
    })
    t1.to("#loader", {
        display: "none"
    })
};
loaderFunction();

// courser controller.

document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y
    })
})


gsap.from(".container-fluid", {
    x: 800,
    duration: 1.2,
    opacity: 0,
    delay: 7
})

// Magnetic effect on the home page -> 01
function magnetic_effect01() {
    const magneticArea = document.querySelector('.magnetic-area');
    const item = document.querySelector('.left-item');

    magneticArea.addEventListener('mousemove', (e) => {
        const rect = magneticArea.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        item.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    });

    magneticArea.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0, 0)';
    });
}
magnetic_effect01();

// page 2
const wrapper = document.querySelector('.reveal-wrapper');
const overlay = document.querySelector('.overlay');

wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // overlay.style.maskImage =
    //     overlay.style.webkitMaskImage = `
    //     radial-gradient(
    //         circle 120px at ${x}px ${y}px,
    //         transparent 0%,
    //         rgba(0,0,0,1) 60%,
    //         black 100%
    //     )
    // `;
    overlay.style.maskImage =
        overlay.style.webkitMaskImage = `
radial-gradient(
  140px 120px at ${x - 20}px ${y - 10}px,
  transparent  60%,
  black 70%
),
radial-gradient(
  120px 140px at ${x + 20}px ${y + 10}px,
  transparent 60%,
  black 70%
)
`;

});

wrapper.addEventListener('mouseleave', () => {
    overlay.style.maskImage =
        overlay.style.webkitMaskImage = `
        radial-gradient(circle 0px at 0 0, transparent 0%, black 100%)
    `;
});


document.querySelectorAll('.reveal-wrapper2').forEach(wrapper => {
    const overlay = wrapper.querySelector('.overlay2');

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    wrapper.addEventListener('mouseleave', () => {
        mouseX = -999;
        mouseY = -999;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        overlay.style.webkitMaskImage =
        overlay.style.maskImage = `
            radial-gradient(
                circle 120px at ${currentX}px ${currentY}px,
                transparent 20%,
                rgba(0,0,0,0.8) 60%,
                black 100%
            )
        `;

        requestAnimationFrame(animate);
    }

    animate();
});


gsap.to("#service-heading", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#secondlastsection",
        scroller:"body",
        start: "top 0",
        end: "top -100%",
        scrub: 3,
        pin: true
    }
})
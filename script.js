var t1 = gsap.timeline()
t1.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.4,
    delay: 0.5
})
t1.from("#line1-part1",{
    opacity: 0,
    onStart : function(){
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
t1.to('.line h2',{
    animationName: 'now-animate',
    opacity: 1
})


t1.to("#loader", {
    opacity : 0,
    duration : 0.4,
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
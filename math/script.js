/* particles */
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#00e676" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});

/* EmailJS init */
(function(){
    emailjs.init("Z9ECvwynhGdr8-R9a");
})();

/* إرسال الإيميل */
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("service_mmwzcyi", "template_p0sre24", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(() => {
        alert("تم ارسال رسالتك");
    }, () => {
        alert("❌ حدث خطأ");
    });
});

/* parallax */
window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});
// ===============================
// REVEAL ANIMATION (نظيف بدون مشاكل)
// ===============================
const sections = document.querySelectorAll(".section");

function reveal(){
    sections.forEach(sec => {

        let top = sec.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ===============================
// HOVER 3D (خفيف وآمن)
// ===============================
const box = document.querySelector(".work-box");

if (box) {

    box.addEventListener("mousemove", (e) => {

        const rect = box.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 6;
        const rotateX = (0.5 - y) * 6;

        box.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)
        `;
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    });
}


// ===============================
// CINEMATIC LOADER (مرتب)
// ===============================
const text = document.getElementById("loader-text");

if(text){
    const letters = text.innerText.split("");
    text.innerHTML = "";

    letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.animationDelay = i * 0.1 + "s";
        text.appendChild(span);
    });
}

window.addEventListener("load", () => {

    setTimeout(() => {
        const loader = document.getElementById("loader");

        if(loader){
            loader.classList.add("hide");
            document.body.classList.add("loaded");
        }

    }, 1800);
});
const cvBtn = document.querySelector(".cv");

if(cvBtn){
    cvBtn.addEventListener("click", ()=>{

        const text = cvBtn.querySelector(".cv-text");
        const loading = cvBtn.querySelector(".cv-loading");

        text.style.display = "none";
        loading.style.display = "inline-block";

        // يرجع طبيعي بعد ثانيتين
        setTimeout(()=>{
            text.style.display = "inline";
            loading.style.display = "none";
        },2000);
    });
}

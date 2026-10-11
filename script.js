/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        menuBtn.textContent = "X";
    } else {
        menuBtn.textContent = "="
    }
});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () =>{
        nav.classList.remove("open");
        menuBtn.textContent = "=";
    });
});


/* DARK/LIGHT MODE */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ){
        themeBtn.textContent = "light";
    } else {
        themeBtn.textContent = "dark"
    }
});


/* SCROLL ANIMATIONS */

const observer = new IntersectionObserver (
    entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting)
            {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach(element =>{
    ResizeObserverEntry.observe(element);
});


/* CURRENT YEAR */

document.getElementById("year").textContent =
new Date().getFullYear();


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const formNote = document.getElementById(formNote);

contactForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const name = document.getElementById(name).ariaValueMax.trim();

        formNote.textContent =
        contactForm.reset()
    }
);









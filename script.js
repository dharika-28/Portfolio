function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function scrollProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.target = "_blank";
    link.click();
}

function sendMail() {
    window.open("mailto:dharikashanmugam@gmail.com", "_blank");
}

function openGithub() {
    window.open("https://github.com/dharika-28", "_blank");
}

window.addEventListener("scroll", function () {
    const btn = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

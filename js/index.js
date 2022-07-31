
// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});

// Topup disappearing code
const topupBtn = document.querySelector("#topupcloser");
topupBtn.addEventListener("click", () => {
    document.querySelector(".topup").style.display = "none";
});

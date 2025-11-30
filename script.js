document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------
       VIDEO AUTOPLAY
    ---------------------------- */
    const video = document.getElementById("hero-video");
    if (video) video.play();

    /* ---------------------------
       PROJECT ADD / REMOVE SYSTEM
    ---------------------------- */
    const addCardBtn = document.getElementById("add-card");
    const gridContainer = document.querySelector(".grid-container");

    let projectCount = 3; // Initial cards count

    // Function: attach delete button to a card
    function attachDeleteButton(card) {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            card.style.transition = "0.3s";
            card.style.opacity = "0";
            card.style.transform = "scale(0.9)";

            setTimeout(() => card.remove(), 300);
        });

        card.appendChild(deleteBtn);
    }

    // Add delete button to all existing cards
    document.querySelectorAll(".card").forEach(card => {
        attachDeleteButton(card);
    });

    // Add new card
    if (addCardBtn) {
        addCardBtn.addEventListener("click", () => {
            projectCount++;

            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.textContent = `Project ${projectCount}`;

            // Start with small animation
            newCard.style.opacity = "0";
            newCard.style.transform = "translateY(20px)";

            attachDeleteButton(newCard);
            gridContainer.appendChild(newCard);

            setTimeout(() => {
                newCard.style.transition = "0.4s ease";
                newCard.style.opacity = "1";
                newCard.style.transform = "translateY(0)";
            }, 50);
        });
    }

});

/* ---------------------------
   MOBILE MENU TOGGLE
---------------------------- */
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.innerHTML = isOpen ? "✕" : "☰";
    });
}

/* ---------------------------
   FORM VALIDATION
---------------------------- */
const form = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            messageDiv.textContent = "Please fill out all required fields.";
            messageDiv.style.color = "red";
            return;
        }

        messageDiv.textContent = "Thank you! Your message has been sent ✔";
        messageDiv.style.color = "green";

        form.reset();
    });
}

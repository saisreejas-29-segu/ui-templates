 const searchButton = document.getElementById("searchBtn");

const destinationInput =
    document.getElementById("destinationInput");

const destinationCards =
    document.querySelectorAll(".destination-card");


searchButton.addEventListener("click", () => {

    const searchValue =
        destinationInput.value.toLowerCase().trim();


    if (searchValue === "") {

        destinationCards.forEach(card => {
            card.style.display = "block";
        });

        return;
    }


    destinationCards.forEach(card => {

        const destination =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (destination.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent.trim() === "♡") {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});
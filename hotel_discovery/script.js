const searchButton =
    document.getElementById("searchHotels");

const locationInput =
    document.getElementById("locationInput");

const hotelCards =
    document.querySelectorAll(".hotel-card");


searchButton.addEventListener("click", () => {

    const value =
        locationInput.value.toLowerCase().trim();


    hotelCards.forEach(card => {

        const location =
            card.querySelector(".hotel-top p")
                .textContent
                .toLowerCase();

        if (
            value === "" ||
            location.includes(value)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


const hearts =
    document.querySelectorAll(".heart");


hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.textContent =
            heart.textContent.trim() === "♡"
                ? "♥"
                : "♡";

    });

});


const sortSelect =
    document.getElementById("sortSelect");

const hotelGrid =
    document.getElementById("hotelGrid");


sortSelect.addEventListener("change", () => {

    const cards =
        [...hotelGrid.querySelectorAll(".hotel-card")];

    const value = sortSelect.value;


    if (value === "low") {

        cards.sort(
            (a, b) =>
                Number(a.dataset.price) -
                Number(b.dataset.price)
        );

    }


    if (value === "high") {

        cards.sort(
            (a, b) =>
                Number(b.dataset.price) -
                Number(a.dataset.price)
        );

    }


    cards.forEach(card => {

        hotelGrid.appendChild(card);

    });

});
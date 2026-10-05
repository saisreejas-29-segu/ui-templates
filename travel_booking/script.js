const bookingButtons =
    document.querySelectorAll(".book-button");

const selectedPackage =
    document.getElementById("selectedPackage");

const bookingForm =
    document.getElementById("bookingForm");


bookingButtons.forEach(button => {

    button.addEventListener("click", () => {

        const packageName =
            button.dataset.package;

        selectedPackage.textContent =
            packageName;

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


bookingForm.addEventListener("submit", event => {

    event.preventDefault();

    alert(
        "Your booking request has been submitted successfully!"
    );

    bookingForm.reset();

    selectedPackage.textContent =
        "No package selected";

});
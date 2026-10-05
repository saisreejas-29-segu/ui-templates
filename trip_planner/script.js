const addActivity =
    document.getElementById("addActivity");

const activityList =
    document.getElementById("activityList");

const saveBtn =
    document.getElementById("saveBtn");


addActivity.addEventListener("click", () => {

    const newCard = document.createElement("div");

    newCard.className = "day-card";

    newCard.innerHTML = `
        <div class="day-number">
            +
        </div>

        <div class="day-info">

            <span>NEW ACTIVITY</span>

            <h3>New Experience</h3>

            <p>
                Add a new activity to your itinerary.
            </p>

        </div>

        <button class="delete-btn">
            ×
        </button>
    `;

    activityList.appendChild(newCard);

    attachDelete(newCard);

});


function attachDelete(card) {

    const deleteButton =
        card.querySelector(".delete-btn");

    deleteButton.addEventListener("click", () => {

        card.remove();

    });

}


document
    .querySelectorAll(".day-card")
    .forEach(card => {

        attachDelete(card);

    });


saveBtn.addEventListener("click", () => {

    alert("Your trip plan has been saved.");

});
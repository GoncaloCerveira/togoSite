
function submitForm() {
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        card.style.display = "block";
    });
    filterBySpecies();
    filterByGender();
    filterByAge();
    filterBySize();
    filterByLocation();
    filterByBreed();
}

function filterBySpecies() {
    var filter = document.getElementById("species-dropdown").value;
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description .species").value.toLowerCase();

        if (filter === "all" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

function filterByGender() {
    var filter = document.getElementById("gender-dropdown").value;
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description .gender").value.toLowerCase();

        if (filter === "all" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

function filterByAge() {
    var filter = document.getElementById("age-dropdown").value;
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description p:first-child").textContent.split(":")[1].trim().toLowerCase();

        if (filter === "all" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

function filterByLocation() {
    var filter = document.getElementById("location-dropdown").value;
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description p:nth-child(2)").textContent.split(":")[1].trim().toLowerCase();

        if (filter === "all" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

function filterBySize() {
    var filter = document.getElementById("size-dropdown").value;
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description p:nth-child(3)").textContent.split(":")[1].trim().toLowerCase();

        if (filter === "all" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

function filterByBreed() {
    var filter = document.getElementById("breed-input").value.toLowerCase();
    var cards = document.querySelectorAll(".flip-card");

    cards.forEach(function(card) {
        var age = card.querySelector(".description p:nth-child(4)").textContent.split(":")[1].trim().toLowerCase();

        if (filter === "" || age === filter) {
        } else {
            card.style.display = "none";
        }
    });
}

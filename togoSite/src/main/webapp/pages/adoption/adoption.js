
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

    let popup = document.getElementById("popup");
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    let popupLogin = document.getElementById("popupLogin");

    signUpButton.addEventListener('click', () => {
	    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
	    container.classList.remove("right-panel-active");
    });

    function openPopup() {
        var linkElement = document.querySelector('.links_name');
        if(linkElement.innerText === 'Login/Register')
            popup.classList.toggle("open-popup");
        else{
            popupLogin.classList.toggle("open-popup");
        }
    }

    function closePopup() {
        popup.classList.remove("open-popup");
    }

    function closePopupLogin() {
        popupLogin.classList.remove("open-popup");
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
          pannel.style.display = "none";
        } else {
          pannel.style.display = "block";
        }
      });
    }

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    const togglePassword2 = document.querySelector('#togglePasswordC');
    const password2 = document.querySelector('#passwordC');

    togglePassword2.addEventListener('click', function (e) {
        const type = password2.getAttribute('type') === 'password' ? 'text' : 'passwordC';
        password2.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    const togglePassword3 = document.querySelector('#togglePasswordL');
    const password3 = document.querySelector('#passwordL');

    togglePassword3.addEventListener('click', function (e) {
        const type = password3.getAttribute('type') === 'password' ? 'text' : 'passwordL';
        password3.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    function on() {
        document.getElementById('overlay').style.display = 'block';
    }

    function off() {
        document.getElementById('overlay').style.display = 'none';
    }
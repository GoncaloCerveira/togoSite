var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(' active', '');
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].className += ' active';
  }

  function contactOwner() {
    // Placeholder for your contact logic
    alert("Thank you for your interest in Buddy! I'll be in touch shortly.");
    // Replace the above line with your actual contact logic
  }

  let popup = document.getElementById('popup');
    let popup2 = document.getElementById('popupForum');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    function openPopup2() {
      popup2.classList.toggle('open-popup');
    }

    function closePopup2() {
      popup2.classList.remove('open-popup');
    }

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    function openPopup() {
      popup.classList.toggle('open-popup');
    }

    function closePopup() {
      popup.classList.remove('open-popup');
    }

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
      const type =
        password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    const togglePassword2 = document.querySelector('#togglePasswordC');
    const password2 = document.querySelector('#passwordC');

    togglePassword2.addEventListener('click', function (e) {
      const type =
        password2.getAttribute('type') === 'password' ? 'text' : 'passwordC';
      password2.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    const togglePassword3 = document.querySelector('#togglePasswordL');
    const password3 = document.querySelector('#passwordL');

    togglePassword3.addEventListener('click', function (e) {
      const type =
        password3.getAttribute('type') === 'password' ? 'text' : 'passwordL';
      password3.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    function on() {
      document.getElementById('overlay').style.display = 'block';
    }

    function off() {
      document.getElementById('overlay').style.display = 'none';
    }
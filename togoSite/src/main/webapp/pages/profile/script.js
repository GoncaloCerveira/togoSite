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

    let arrow = document.querySelectorAll('.arrow');
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener('click', (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle('showMenu');
      });
    }

    function changeWindow(
      div1,
      div2,
      div3,
      div4,
      div5,
      div6,
      div7,
      div8,
      div9
    ) {
      var appear = document.getElementById(div1);
      var gone1 = document.getElementById(div2);
      var gone2 = document.getElementById(div3);
      var gone3 = document.getElementById(div4);
      var gone4 = document.getElementById(div5);
      var gone5 = document.getElementById(div6);
      var gone6 = document.getElementById(div7);
      var gone7 = document.getElementById(div8);
      var gone8 = document.getElementById(div9);

      console.log(appear);

      appear.style.display = 'block';
      gone1.style.display = 'none';
      gone2.style.display = 'none';
      gone3.style.display = 'none';
      gone4.style.display = 'none';
      gone5.style.display = 'none';
      gone6.style.display = 'none';
      gone7.style.display = 'none';
      gone8.style.display = 'none';
    }

    function on() {
      document.getElementById('overlay').style.display = 'block';
    }

    function off() {
      document.getElementById('overlay').style.display = 'none';
    }
  function updateWordCount() {
    var text = document.getElementById('description').value;
    var words = text.split('').filter(function (word) {
      return word.length > 0;
    }).length;
    document.getElementById('wordCount').innerText = words + '/1000';
  }

  function resetWordCount() {
      document.getElementById('wordCount').innerText = 0 + '/1000';
    }

  // Initialize word count on page load
  document.addEventListener('DOMContentLoaded', function () {
    updateWordCount();
  });

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

    function clearInputs() {
          var inputs = document.querySelectorAll('input, textarea');
          inputs.forEach(function(input) {
            input.value = ''; // Clear the value of each input
          });
    }
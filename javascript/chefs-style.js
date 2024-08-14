function clickStyle() {
  const buttonElement = document.querySelector('.js-style span');

  if (buttonElement.innerHTML === 'OUR CHEFS') {
    buttonElement.innerHTML = 'MEET OUR CHEFS';
  } else {
    buttonElement.innerHTML = 'OUR CHEFS';
  }
}


document.querySelectorAll(".js-style").forEach(function(button) {
  button.addEventListener("click", function() {
    const targetClass = button.getAttribute("data-target");
    document.querySelector("." + targetClass).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.js-button').forEach(function(button) {
  button.addEventListener("click", function() {
    const chefMain = button.getAttribute("data-target");
    document.querySelector("." + chefMain).scrollIntoView({behavior: 'smooth'});
  });
});

const searchInput = document.querySelector('.js-connect');
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchInput.value = '';
  }
});

const emailSearch = document.querySelector('.js-connect1'); 
emailSearch.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    emailSearch.value = '';
  }
});


const connectButton = document.querySelector('.js-connect-button');

connectButton.addEventListener('click', function() {
  const nameValue = searchInput.value.trim();
  const emailValue = emailSearch.value.trim();
  if (nameValue && emailValue) {
    alert(`${nameValue}, your request is successfully sent.`);

    searchInput.value = '';
    emailSearch.value = '';
  } else {
      alert('Fill in both your name and email address to connect');
  }
})
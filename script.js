// Get the modal
const modalBackground = document.getElementById("ModalBackground");

// Get the button that opens the modal
const modalLink = document.getElementById("ModalLink");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("closeModal")[0];

//Get the paragraphs that display the error messages
const errorParagraphs = document.querySelectorAll(".error-form");
// When the user clicks on the button, open the modal
/*When the user clicks on "Tickets" button, give modal 2 display none and
modal 1 display block.*/
let form = document.querySelector(".myform");
modalLink.addEventListener("click", function () {
  modalBackground.style.display = "block";
  modal1.style.display = "block";
  modal2.style.display = "none";
  // reset the inputs back to their original state
  form.reset();
  totalPrice.textContent = "";
  //delete the error messages
  for (let error of errorParagraphs) {
    error.style.display = "none";
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalBackground.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalBackground) {
    //event target refers to the element that triggered the event
    modalBackground.style.display = "none";
  }
};

//Price for tickets
let price = "";
let totalPrice = document.querySelector(".totalPrice");
let numberKids = document.querySelector("#numberKids");
let numberAdults = document.querySelector("#numberAdults");
let optionKids = "";
let optionAdults = "";

//Will take the values of the options selected and calculate the price
function calculatePrice() {
  optionKids = numberKids.value;
  optionAdults = numberAdults.value;
  price = optionKids * 5 + optionAdults * 10;
  totalPrice.textContent = `${price}$`;
}

numberKids.addEventListener("change", calculatePrice);
numberAdults.addEventListener("change", calculatePrice);

//displaying "Thank you" message when "Make a reservation" button is clicked
let reservationButton = document.querySelector(".modal-reservation-button");
let modal1 = document.querySelector(".modal-1");
let modal2 = document.querySelector(".modal-2");
let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let reservationName = document.querySelector(".reservation-name");
let reservationEmail = document.querySelector(".reservation-email");
let reservationDay = document.querySelector("#reservationDay");

//Form validation
//variables for all the paragraphs that display errors in the form
let errorGuests = document.getElementById("error-guests");
let errorDate = document.getElementById("error-date");
let errorName = document.getElementById("error-name");
let errorEmail = document.getElementById("error-email");

//function for guests validation
function numberOfGuests() {
  if (numberKids.value != 0 || numberAdults.value != 0) {
    return true;
  } else {
    errorGuests.style.display = "block";
    return false;
  }
}
//function for date validation
function isDateValid() {
  let inputDate = new Date(reservationDay.value);
  if (!isNaN(inputDate)) {
    //check if the date is in the past
    let currentDate = new Date();
    if (inputDate > currentDate) {
      return true;
    } else {
      errorDate.style.display = "block";
      return false;
    }
  } else {
    errorDate.style.display = "block";
    return false;
  }
}

//function for name validation

function isNameCompleted() {
  if (inputName.value == "") {
    errorName.style.display = "block";
    return false;
  } else {
    return true;
  }
}

//function for e-mail validation
function isEmailValid() {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = emailPattern.test(inputEmail.value);
  if (isValid == true) {
    return true;
  } else {
    errorEmail.style.display = "block";
    return false;
  }
}

reservationButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    numberOfGuests() &&
    isDateValid() &&
    isNameCompleted() &&
    isEmailValid()
  ) {
    modal1.style.display = "none";
    modal2.style.display = "block";
    reservationName.textContent = inputName.value;
    reservationEmail.textContent = inputEmail.value;
  }
});

//Turn the nav purple when scrolling
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

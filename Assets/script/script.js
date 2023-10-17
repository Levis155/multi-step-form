const nextBtn1 = document.querySelector("#next-btn");
const nextBtn2 = document.querySelector("#next-btn2");
const nextBtn3 = document.querySelector("#next-btn3");
const confirmBtn = document.querySelector('#confirm-btn');

const backBtn1 = document.querySelector("#back-btn1");
const backBtn2 = document.querySelector("#back-btn2");
const backBtn3 = document.querySelector("#back-btn3");

const arcadeCard = document.querySelector("#arcade-card");
const advancedCard = document.querySelector("#advanced-card");
const proCard = document.querySelector("#pro-card");

const sliderSwitch = document.querySelector("#slider-switch");

const osCheckbox = document.querySelector("#osCheckbox");
const lsCheckbox = document.querySelector("#ls-checkbox");
const cpCheckbox = document.querySelector("#cp-checkbox");

const changeLink = document.querySelector('#change-link')

let osBill = 0;
let lsBill = 0;
let cpBill = 0;


nextBtn1.addEventListener("click", () => {
  const nameTextbox = document.querySelector("#name-textbox");
  const emailTextbox = document.querySelector("#email-textbox");
  const phoneTextbox = document.querySelector("#phone-textbox");

  if (nameTextbox.value === "") {
    document.querySelector("#error-message-name").innerHTML =
      "This field is required";
    nameTextbox.classList.add("name-textbox-error");
  } else {
    document.querySelector("#error-message-name").innerHTML = "";

    nameTextbox.classList.remove("name-textbox-error");
  }

  if (emailTextbox.value === "") {
    document.querySelector("#error-message-email").innerHTML =
      "This field is required";
    emailTextbox.classList.add("email-textbox-error");
  } else {
    document.querySelector("#error-message-email").innerHTML = "";

    emailTextbox.classList.remove("email-textbox-error");
  }

  if (phoneTextbox.value === "") {
    document.querySelector("#error-message-phone").innerHTML =
      "This field is required";
    phoneTextbox.classList.add("phone-textbox-error");
  } else {
    document.querySelector("#error-message-phone").innerHTML = "";

    phoneTextbox.classList.remove("phone-textbox-error");
  }

  if (
    nameTextbox.value !== "" &&
    emailTextbox.value !== "" &&
    phoneTextbox.value !== ""
  ) {
    document
      .querySelector("#step-cont-left1")
      .classList.add("step-cont-left1-untoggled");

    document
      .querySelector("#step-cont-left2")
      .classList.add("step-cont-left2-toggled");

    document
      .querySelector("#personal-info-cont")
      .classList.add("personal-info-cont-inv");

    document.querySelector("#plan-cont").classList.add("plan-cont-vis");
  }
});

nextBtn2.addEventListener("click", () => {
  if (
    document.querySelector("#plan-selected").innerHTML === "Arcade" &&
    document.querySelector("#duration-brackets").innerHTML === "(Monthly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "9";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/mo";
  } else if (
    document.querySelector("#plan-selected").innerHTML === "Arcade" &&
    document.querySelector("#duration-brackets").innerHTML === "(Yearly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "90";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/yr";
  }

  if (
    document.querySelector("#plan-selected").innerHTML === "Advanced" &&
    document.querySelector("#duration-brackets").innerHTML === "(Monthly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "12";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/mo";
  } else if (
    document.querySelector("#plan-selected").innerHTML === "Advanced" &&
    document.querySelector("#duration-brackets").innerHTML === "(Yearly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "120";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/yr";
  }

  if (
    document.querySelector("#plan-selected").innerHTML === "Pro" &&
    document.querySelector("#duration-brackets").innerHTML === "(Monthly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "15";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/mo";
  } else if (
    document.querySelector("#plan-selected").innerHTML === "Pro" &&
    document.querySelector("#duration-brackets").innerHTML === "(Yearly)"
  ) {
    document.querySelector("#plan-selected-price-figure").innerHTML = "150";
    document.querySelector("#plan-selected-price-duration").innerHTML = "/yr";
  }

  if (
    arcadeCard.classList.contains("plan-card-clicked") ||
    advancedCard.classList.contains("plan-card-clicked") ||
    proCard.classList.contains("plan-card-clicked")
  ) {
    document
      .querySelector("#step-cont-left2")
      .classList.remove("step-cont-left2-toggled");

    document
      .querySelector("#step-cont-left3")
      .classList.add("step-cont-left3-toggled");

    document.querySelector("#plan-cont").classList.add("plan-cont-inv");

    document.querySelector("#add-ons-cont").classList.add("add-ons-cont-vis");
  }
});

nextBtn3.addEventListener("click", () => {
  if (
    document
      .querySelector("#os-card")
      .classList.contains("add-ons-card-toggled") ||
    document
      .querySelector("#ls-card")
      .classList.contains("add-ons-card-toggled") ||
    document
      .querySelector("#cp-card")
      .classList.contains("add-ons-card-toggled")
  ) {
    document
      .querySelector("#step-cont-left3")
      .classList.remove("step-cont-left3-toggled");

    document
      .querySelector("#step-cont-left4")
      .classList.add("step-cont-left4-toggled");

    document
      .querySelector("#add-ons-cont")
      .classList.remove("add-ons-cont-vis");

    document.querySelector("#summary-cont").classList.add("summary-cont-vis");

    

  if (
    document.querySelector("#os-card").classList.contains("add-ons-card-toggled") && document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-os">
        <p class="addon-selected">Online service</p>
        <p class="addon-selected-price addon-selected-price-os">+$<span id="addon-selected-price-figure addon-selected-price-figure-os">10</span>/yr</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per year)';
    document.querySelector('#total-figure-duration').innerHTML = '/yr';
    osBill = 10;
  } else if (
    document.querySelector("#os-card").classList.contains("add-ons-card-toggled") && !document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-os">
        <p class="addon-selected">Online service</p>
        <p class="addon-selected-price addon-selected-price-os">+$<span id="addon-selected-price-figure addon-selected-price-figure-os">1</span>/mo</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per month)';
    document.querySelector('#total-figure-duration').innerHTML = '/mo';
    osBill = 1;
  }else{
    osBill = 0;
  }



  if (
    document.querySelector("#ls-card").classList.contains("add-ons-card-toggled") && document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-ls">
        <p class="addon-selected">Larger storage</p>
        <p class="addon-selected-price addon-selected-price-ls">+$<span id="addon-selected-price-figure addon-selected-price-figure-ls">20</span>/yr</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per year)';
    document.querySelector('#total-figure-duration').innerHTML = '/yr';
    lsBill = 20;
  } else if (document.querySelector("#ls-card").classList.contains("add-ons-card-toggled") && !document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-ls">
        <p class="addon-selected">Larger storage</p>
        <p class="addon-selected-price addon-selected-price-ls">+$<span id="addon-selected-price-figure addon-selected-price-figure-ls">2</span>/mo</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per month)';
    document.querySelector('#total-figure-duration').innerHTML = '/mo';
    lsBill = 2;
  }else {
    lsBill = 0;
  }


  if (
    document.querySelector("#cp-card").classList.contains("add-ons-card-toggled") && document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-cp addon-selected-cont-cp-yr">
        <p class="addon-selected">Customizable profile</p>
        <p class="addon-selected-price addon-selected-price-cp">+$<span id="addon-selected-price-figure addon-selected-price-figure-cp">20</span>/yr</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per year)';
    document.querySelector('#total-figure-duration').innerHTML = '/yr';
    cpBill = 20;
  } else if (
    document.querySelector("#cp-card").classList.contains("add-ons-card-toggled") && !document.querySelector("#yearly-tag").classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#checkout-card-bottom").innerHTML += `
    <div class="addon-selected-cont addon-selected-cont-cp addon-selected-cont-cp-yr">
        <p class="addon-selected">Customizable profile</p>
        <p class="addon-selected-price addon-selected-price-cp">+$<span id="addon-selected-price-figure addon-selected-price-figure-cp">2</span>/mo</p>
    </div>
    `;

    document.querySelector('#per-brackets').innerHTML = '(per month)';
    document.querySelector('#total-figure-duration').innerHTML = '/mo';
    cpBill = 2;
  } else {
    cpBill = 0;
  } 
  }
  
  const planBill = Number(document.querySelector('#plan-selected-price-figure').innerHTML);
  const addOnsbill = osBill +lsBill +cpBill
  const totalBill = planBill + addOnsbill;
  document.querySelector('#total-figure-digit').innerHTML = `${totalBill}`;

});


confirmBtn.addEventListener('click', () => {
  document.querySelector("#summary-cont").classList.remove("summary-cont-vis");
  document.querySelector('#thankyou-cont').classList.add('thankyou-cont-vis')
})


backBtn1.addEventListener("click", () => {
  document
    .querySelector("#step-cont-left1")
    .classList.remove("step-cont-left1-untoggled");

  document
    .querySelector("#step-cont-left2")
    .classList.remove("step-cont-left2-toggled");

  document
    .querySelector("#personal-info-cont")
    .classList.remove("personal-info-cont-inv");

  document.querySelector("#plan-cont").classList.remove("plan-cont-vis");
});

backBtn2.addEventListener("click", () => {
  document
    .querySelector("#step-cont-left2")
    .classList.add("step-cont-left2-toggled");

  document
    .querySelector("#step-cont-left3")
    .classList.remove("step-cont-left3-toggled");

  document.querySelector("#add-ons-cont").classList.remove("add-ons-cont-vis");

  document.querySelector("#plan-cont").classList.remove("plan-cont-inv");
});

backBtn3.addEventListener("click", () => {
  document
    .querySelector("#step-cont-left3")
    .classList.add("step-cont-left3-toggled");

  document
    .querySelector("#step-cont-left4")
    .classList.remove("step-cont-left4-toggled");

  document.querySelector("#add-ons-cont").classList.add("add-ons-cont-vis");

  document.querySelector("#summary-cont").classList.remove("summary-cont-vis");

  document.querySelector("#checkout-card-bottom").innerHTML = '';
});

arcadeCard.addEventListener("click", () => {
  document.querySelector("#arcade-card").classList.toggle("plan-card-clicked");

  document
    .querySelector("#advanced-card")
    .classList.remove("plan-card-clicked");

  document.querySelector("#pro-card").classList.remove("plan-card-clicked");

  document.querySelector("#plan-selected").innerHTML = "Arcade";
});

advancedCard.addEventListener("click", () => {
  document
    .querySelector("#advanced-card")
    .classList.toggle("plan-card-clicked");

  document.querySelector("#arcade-card").classList.remove("plan-card-clicked");

  document.querySelector("#pro-card").classList.remove("plan-card-clicked");

  document.querySelector("#plan-selected").innerHTML = "Advanced";
});

proCard.addEventListener("click", () => {
  document.querySelector("#pro-card").classList.toggle("plan-card-clicked");

  document.querySelector("#arcade-card").classList.remove("plan-card-clicked");

  document
    .querySelector("#advanced-card")
    .classList.remove("plan-card-clicked");

  document.querySelector("#plan-selected").innerHTML = "Pro";
});

sliderSwitch.addEventListener("click", () => {
  document.querySelector("#yearly-tag").classList.toggle("yearly-tag-toggled");

  document
    .querySelector("#monthly-tag")
    .classList.toggle("monthly-tag-untoggled");

  if (
    document
      .querySelector("#yearly-tag")
      .classList.contains("yearly-tag-toggled")
  ) {
    document.querySelector("#arcade-billing").innerHTML = "$90/yr";
    document.querySelector("#advanced-billing").innerHTML = "$120/yr";
    document.querySelector("#pro-billing").innerHTML = "$150/yr";

    document.querySelectorAll("#special-offer").forEach((specialOffer) => {
      specialOffer.classList.add("special-offer-vis");
    });

    document.querySelector("#os-price").innerHTML = "+$10/yr";
    document.querySelector("#ls-price").innerHTML = "+$20/yr";
    document.querySelector("#cp-price").innerHTML = "+$20/yr";

    document.querySelector("#duration-brackets").innerHTML = "(Yearly)";
    

  } else {
    document.querySelector("#arcade-billing").innerHTML = "$9/mo";
    document.querySelector("#advanced-billing").innerHTML = "$12/mo";
    document.querySelector("#pro-billing").innerHTML = "$15/mo";

    document.querySelectorAll("#special-offer").forEach((specialOffer) => {
      specialOffer.classList.remove("special-offer-vis");
    });

    document.querySelector("#os-price").innerHTML = "+$1/mo";
    document.querySelector("#ls-price").innerHTML = "+$2/mo";
    document.querySelector("#cp-price").innerHTML = "+$2/mo";

    document.querySelector("#duration-brackets").innerHTML = "(Monthly)";


  }
});

osCheckbox.addEventListener("click", () => {
  document.querySelector("#os-card").classList.toggle("add-ons-card-toggled");
});

lsCheckbox.addEventListener("click", () => {
  document.querySelector("#ls-card").classList.toggle("add-ons-card-toggled");
});

cpCheckbox.addEventListener("click", () => {
  document.querySelector("#cp-card").classList.toggle("add-ons-card-toggled");
});

changeLink.addEventListener('click', () => {
  document.querySelector("#checkout-card-bottom").innerHTML = '';
  document
  .querySelector("#step-cont-left4")
  .classList.remove("step-cont-left4-toggled");

  document
  .querySelector("#step-cont-left2")
  .classList.add("step-cont-left2-toggled");

  document.querySelector("#summary-cont").classList.remove("summary-cont-vis");
  document.querySelector("#plan-cont").classList.remove("plan-cont-inv");
})

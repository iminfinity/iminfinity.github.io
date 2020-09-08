document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("user_WRuUapGwUf7srVPu7kfAa");
  cursorMove();
  document.querySelectorAll(".form-input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value.length > 0) {
        input.placeholder = input.labels[0].textContent;
        input.labels[0].textContent = "";
      }
    });
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("default_service", "svg_portfolio_clone", this);
      this.style.display = "none";
      showMessage();
    });
});

function showMessage() {
  const messageSent = document.querySelector("#message-sent");
  messageSent.style.display = "block";
  messageSent.style.animationPlayState = "running";
  messageSent.addEventListener("animationend", () => {
    messageSent.style.display = "none";
    var message = document.createElement("div");
    message.innerHTML = ` <header style="margin: 10px"> <section style="width: 100%; flex-direction: row-reverse; padding-left: 5px"> <aside style="flex-direction: row-reverse; border: none"> <div></div> <div></div> <div></div></aside> &#10004; </section> <p style="background: whitesmoke">Message Sent</p> </header> `;
    message.id = "message";
    document.querySelector("#form-slash-message").append(message);
  });
}
function nightMode() {
  document.querySelector("#night-mode-switcher-container").style.visibility =
    "visible";
  setTimeout(
    () =>
      (document.querySelector(
        "#night-mode-switcher-container"
      ).style.visibility = "hidden"),
    4000
  );
}
function switchChecked() {
  var checkbox = document.getElementById("switch");
  if (checkbox.checked == true) {
    document.querySelector("#dark-mode").href = "./css/night.css";
  }
  if (checkbox.checked != true) {
    document.querySelector("#dark-mode").href = "";
  }
}

function cursorMove() {
  var cursor = document.querySelector("#pointer");
  document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
  });
}

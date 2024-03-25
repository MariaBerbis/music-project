function listen() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  let musicType = prompt("What's your favourite music style?");
  musicType = musicType.toLowerCase();
  musicType = musicType.trim();

  if (musicType === "rnb" || musicType === "r&b") {
    alert("Thank you, " + name + "! Keep listening to R&B music");
  } else {
    alert(
      "Thank you, " +
        name +
        "! Good that you like " +
        musicType +
        " music, only try some R&B! 😁"
    );
  }
}

let listenButton = document.querySelector(".listen-button");
listenButton.addEventListener("click", listen);

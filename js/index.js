const drumButtons = document.querySelectorAll(".drum").length;


document.querySelector(".w").focus();

for (let i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", () => {

    let selectDrum = document.querySelectorAll(".drum")[i].innerHTML;

    playSound(selectDrum);
    drumAnimation(selectDrum);
  });
}

for (let i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("keydown", () => {

    playSound(event.key);
    drumAnimation(event.key);
  });
}

function playSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      document.querySelector(".w").focus();
      break;

    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      document.querySelector(".a").focus();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.querySelector(".s").focus();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      document.querySelector(".d").focus();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.querySelector(".j").focus();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.querySelector(".k").focus();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.querySelector(".l").focus();
      break;

    default:
      alert("Press only the keys on the buttons, 🙃");
  }
}

function drumAnimation(currentKey) {

  let currButton = document.querySelector("." + currentKey);
  currButton.animate([
    // keyframes
    { transform: 'scale(1.0)' },
    { transform: 'scale(1.3)' }
  ], {
    // timing options
    duration: 350,
    iterations: 1
  });
}

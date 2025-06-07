
function checkPasscode() {
  const entered = document.getElementById("rathodsathunayak@gmail.com").value;
  const correct = "rathodsathunayak@gmail.com";  // Change this to your passcode
  if (entered === correct) {
    window.location.href = "tracker.html";
  } else {
    document.getElementById("error").textContent = "Incorrect passcode. Try again.";
  }
}

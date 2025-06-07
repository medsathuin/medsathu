
function checkPasscode() {
  const entered = document.getElementById("passcode").value;
  const correct = "yourpasscode";  // Change this to your passcode
  if (entered === correct) {
    window.location.href = "tracker.html";
  } else {
    document.getElementById("error").textContent = "Incorrect passcode. Try again.";
  }
}

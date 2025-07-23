function checkPassword() {
  const input = document.getElementById("password").value;
  const errorBox = document.getElementById("error");
  const secret = "26/07/2002"; // 🔐 Set your secret password

  if (input.toLowerCase() === secret) {
    window.location.href = "birthday.html";
  } else {
    errorBox.textContent = "girl!! u don't know ur birthday date??? try again";
  }
}

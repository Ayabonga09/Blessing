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

function popEmojis(type) {
  const emojiPop = document.getElementById("emojiPop");
  const emojis = type === "yes" ? ["🥳", "🎉", "😍", "💖", "🎈"] : ["😢", "💔", "😭", "🥺"];
  
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "80vh";
    emojiPop.appendChild(emoji);
    
    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (yesBtn && noBtn) {
    yesBtn.addEventListener("click", () => popEmojis("yes"));
    noBtn.addEventListener("click", () => popEmojis("no"));
  }
});

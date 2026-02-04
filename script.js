const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const proposalBox = document.getElementById("proposalBox");
const finalScreen = document.getElementById("finalScreen");
const message = document.getElementById("message");
const music = document.getElementById("music");
const callBtn = document.getElementById("callBtn");

/* NO button messages */
const noMessages = [
  "Are you sure? 🥺",
  "Think again ❤️",
  "Pleaseeee 😭",
  "My heart says YES 💔",
  "You can’t escape 🙈"
];

let noIndex = 0;
let yesScale = 1;

/* NO button logic */
noBtn.addEventListener("click", () => {
  noBtn.innerText = noMessages[noIndex % noMessages.length];
  noIndex++;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button logic */
yesBtn.addEventListener("click", () => {
  proposalBox.style.display = "none";
  finalScreen.style.display = "block";

  music.volume = 0.6;
  music.play().catch(() => {});

  const text = `
<b>I love you, my baby girl ♥️</b><br><br>

I will love you till the very last breath of my life —
and even after that.<br><br>

I see our beautiful future together:
a happy family,
two lovely kids,
and countless moments of love. 😍<br><br>

I don’t want this marriage to stay in imagination.
I want to live it with you in the real world 🌍<br><br>

From the core of my heart 🫀
From the aorta of my heart 💘
From the arteries of my heart 😚
From every cell of my body 💖<br><br>

<b>“I love you, my future wife ♥️”</b><br><br>

📞 <b>+91 8373038184</b><br><br>

Forever yours,<br>
<b>Your hubby 😁</b>
`;

  message.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    if (text[i] === "<") {
      const end = text.indexOf(">", i);
      message.innerHTML += text.slice(i, end + 1);
      i = end + 1;
    } else {
      message.innerHTML += text[i];
      i++;
    }

    if (i >= text.length) {
      clearInterval(typing);
      callBtn.style.display = "inline-block";
    }
  }, 35);
});


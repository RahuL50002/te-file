let data = {
  date: "",
  food: "",
  location: ""
};

const noMessages = [
  "Are you sure? 🥺","Think again ❤️","Pleaseeee 😭","Don’t break my heart 💔",
  "Say YES 😚","I know you want to 😏","Last chance 🙈","Don’t be cruel 😢",
  "YES is destiny 💍","Okay I’ll grow 😁"
];

let noCount = 0;
let yesScale = 1;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.onclick = () => {
  noBtn.innerText = noMessages[noCount % noMessages.length];
  noCount++;
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (yesScale > 3) {
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
  }
};

yesBtn.onclick = () => showPage(2);

function saveDate() {
  const date = document.getElementById("dateInput").value;
  if (!date) return;
  data.date = date;
  document.getElementById("dateMsg").innerText =
    "Your date with your Hubby is booked 😁";
  setTimeout(() => showPage(3), 1200);
}

function selectFood(food) {
  data.food = food;
  showPage(4);
}

function selectLocation(loc) {
  data.location = loc;
  document.getElementById("summary").innerHTML = `
    📅 Date: ${data.date}<br>
    🍽 Food: ${data.food}<br>
    📍 Location: ${data.location}<br><br>
    I can’t wait to see you ❤️
  `;
  showPage(5);
}

function showPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

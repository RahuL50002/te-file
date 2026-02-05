const pages = document.querySelectorAll(".page");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("music");
const message = document.getElementById("message");
const toDateBtn = document.getElementById("toDateBtn");

let pageIndex = 0;
let yesScale = 1;
let data = { date:"", food:"", location:"" };

const noMessages = [
  "Are you sure? 🥺","Think again ❤️","Pleaseeee 😭","Don’t break my heart 💔",
  "Say YES 😚","I know you want to 😏","Last chance 🙈",
  "You’re testing me 😢","YES is destiny 💍","Okay I’ll grow 😁"
];

/* Page switch */
function showPage(n){
  pages.forEach(p=>p.classList.remove("active"));
  pages[n].classList.add("active");
}

/* NO logic */
let noCount = 0;
noBtn.onclick = () => {
  noBtn.innerText = noMessages[noCount % noMessages.length];
  noCount++;
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  if(yesScale > 3){
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
  }
};

/* YES → Page 2 */
yesBtn.onclick = () => {
  showPage(1);
  music.volume = 0.6;
  music.play().catch(()=>{});
  typeMessage();
  startHearts();
};

/* Typing */
const text = `
<b>I love you, my baby girl ♥️</b><br><br>
I will love you till my last breath — and even after that.<br><br>
From the core of my heart 🫀<br>
From every cell of my body 💖<br><br>
<b>“I love you, my future wife ♥️”</b>
`;

function typeMessage(){
  let i=0;
  message.innerHTML="";
  const typing = setInterval(()=>{
    if(text[i]==="<"){
      const end=text.indexOf(">",i);
      message.innerHTML+=text.slice(i,end+1);
      i=end+1;
    } else {
      message.innerHTML+=text[i++];
    }
    if(i>=text.length) clearInterval(typing);
  },35);
}

/* Hearts */
function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerText="❤️";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
  },300);
}

/* Next to date */
toDateBtn.onclick=()=>showPage(2);

function saveDate(){
  data.date=document.getElementById("dateInput").value;
  document.getElementById("dateMsg").innerText="Your date with your Hubby is booked 😁";
  setTimeout(()=>showPage(3),1200);
}

function selectFood(f){ data.food=f; }

function selectLocation(l){
  data.location=l;
  document.getElementById("summary").innerHTML=`
    📅 Date: ${data.date}<br>
    🍽 Food: ${data.food}<br>
    📍 Location: ${data.location}<br><br>
    I can’t wait to see you ❤️
  `;
}

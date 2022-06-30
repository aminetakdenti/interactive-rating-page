//*Rating state start
let card = document.querySelector(".card");
let rate = document.querySelectorAll("li");
let rateNmb = 0;
console.log(rate.length);

for (const item of rate) {
  item.onclick = function () {
    for (const i of rate) {
      firstColor(i);
    }
    onClick(item);
    rateNmb = item.textContent;
  };
}
// Return The Color Like It Was
function onClick(item) {
  item.style.backgroundColor = "hsl(216, 12%, 54%)";
  item.style.color = "white";
}

// Change The Color
function firstColor(rt) {
  rt.style.backgroundColor = "#2e3742";
  rt.style.color = "hsl(216, 12%, 54%)";
}

//*Rating state End

//*Thank State Start
let thank = document.querySelector(".thank");
let span = document.querySelector(".thank .info h4 span");

let btn = document.querySelector("button");
btn.onclick = function () {
  card.style.display = "none";
  thank.style.display = "block";
  span.textContent = rateNmb;
};

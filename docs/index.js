const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const d = Date.now();
const today = Math.round(Date.now() / day);
let a = (today) % 4;
let b = "";
if (a === 3) {
    b = "A.";
}
else if (a === 0) {
    b = "B."
}
else if (a === 1) {
    b = "C."
}
else   {
    b = "D."
}
document.getElementById("13").innerHTML = b;
console.log(b);
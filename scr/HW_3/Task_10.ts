//#### Task 10 💻

let key = true;
let documents = true;
let pen = true;
let apple = true;
let orange = false;
const shouldGoToWork = "you can go to work";
const shouldNotGoToWork = "you can't go to work";

if (key && documents && pen && (apple || orange)) {
    console.log(shouldGoToWork);
} else {
    console.log(shouldNotGoToWork);
}

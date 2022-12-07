//#### Task 10 💻

const key = true;
const documents = true;
const pen = true;
const apple = true;
const orange = false;
const shouldGoToWork = "you can go to work";
const shouldNotGoToWork = "you can't go to work";

if (key && documents && pen && (apple || orange)) {
    console.log(shouldGoToWork);
} else {
    console.log(shouldNotGoToWork);
}

const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

const updateCount = (newVal) => {
    if (newVal > 0) {
        count.style.color = "green";
    } else if (newVal < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
    count.innerText = newVal;
}

const increaseCount = () => {
    updateCount(Number(count.innerText) + 1);
}

const resetCount = () => updateCount(0);

const decreaseCount = () => {
    updateCount(Number(count.innerText) - 1);
}
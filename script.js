const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.innerText);
    });
});

// Handle keyboard input (BONUS)
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        handleInput(key);
    } else if (key === "Enter") {
        handleInput("=");
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === "c") {
        display.value = "";
    }
});

// Core calculator logic
function handleInput(value) {
    if (value === "C") {
        display.value = "";
    } else if (value === "=") {
        try {   
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}

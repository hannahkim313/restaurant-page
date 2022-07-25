const displayValid = (input) => input.style.outline = "2px solid var(--dark-green)";
const displayInvalid = (input) => input.style.outline = "2px solid #d07f8e";
const displayFocus = (input) => input.style.outline = "2px solid var(--main-font-color)";
const displayInitial = (input) => input.style.outline = "initial";

const transformInputs = () => {
    const inputs = document.querySelectorAll(".field > :last-child");
    for (const input of inputs) {
        input.addEventListener("click", () => {
            if (!input.value) return;
            input.checkValidity() ? displayValid(input) : displayInvalid(input);
        });
        input.addEventListener("input", () => {
            input.checkValidity() ? displayValid(input) : displayInvalid(input);
        });
        input.addEventListener("focusin", () => {
            if (input.value) return;
            displayFocus(input);
        });
        input.addEventListener("focusout", () => {
            displayInitial(input);
        });
    }
};

const isFormValid = () => {
    const inputs = document.querySelectorAll(".field > :last-child");
    for (const input of inputs) {
        if (!input.checkValidity()) return false;
    }
    return true;
};

const submitForm = () => {
    const submitBtn = document.querySelector("form button");
    submitBtn.addEventListener("click", (e) => {
        if (isFormValid()) location.reload();
    });
};

export {
    transformInputs,
    submitForm
};
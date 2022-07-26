import checkMarkImg from "../../img/check-mark.svg";
import invalidImg from "../../img/invalid.svg";

const createIcon = (type) => {
    const icon = document.createElement("img");
    icon.style.width = "1rem";
    icon.style.position = "absolute";
    icon.style.right = "8px";
    icon.style.bottom = "0.5rem";
    if (type === "valid") {
        icon.src = checkMarkImg;
        icon.alt = "Check mark icon";
    }
    if (type === "invalid") {
        icon.src = invalidImg;
        icon.alt = "Closed circle icon with 'X' in it";
    }
    return icon;
};

const displayValid = (input) => {
    input.style.outline = "2px solid var(--dark-green)";
    const field = input.parentElement;
    field.style.position = "relative";
    if (input.nextElementSibling) input.nextElementSibling.remove();
    field.appendChild(createIcon("valid"));
};

const displayInvalid = (input) => {
    input.style.outline = "2px solid #d07f8e";
    const field = input.parentElement;
    field.style.position = "relative";
    if (input.nextElementSibling) input.nextElementSibling.remove();
    field.appendChild(createIcon("invalid"));
};

const displayFocus = (input) => input.style.outline = "2px solid var(--main-font-color)";

const displayInitial = (input) => input.style.outline = "initial";

const transformInputs = () => {
    const inputs = document.querySelectorAll(".field > :last-child");
    for (const input of inputs) {
        input.addEventListener("input", () => {
            input.checkValidity() ? displayValid(input) : displayInvalid(input);
        });
        input.addEventListener("focusin", () => {
            if (!input.value) displayFocus(input);
            if (input.value && input.checkValidity()) displayValid(input);
            if (input.value && !input.checkValidity()) displayInvalid(input);
        });
        input.addEventListener("focusout", () => displayInitial(input));
    }
};

const isFormValid = () => {
    const inputs = document.querySelectorAll(".field > :nth-child(2)");
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
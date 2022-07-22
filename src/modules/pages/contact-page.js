import { createPage } from "../page-elements/page";
import { createHeader } from "../page-elements/header";
import { createNavMain } from "../page-elements/nav-main";
import { createFooter } from "../page-elements/footer";
import yelpImg from "../../img/yelp.png";
import facebookImg from "../../img/facebook.png";
import instagramImg from "../../img/instagram.png";

const createMainContent = () => {
    const createContent = () => {
        const createTitle = () => {
            const title = document.createElement("h2");
            title.textContent = "Contact Us";
            return title;
        };

        const createDivider = () => {
            const divider = document.createElement("div");
            divider.setAttribute("class", "content-divider");
            return divider;
        };

        const createDescription = () => {
            const text = document.createElement("p");
            text.textContent = "We'd love to hear from you!";
            const textBreak = document.createElement("br");
            const action = document.createElement("p");
            action.textContent = `
                Please fill out the form below,
                and we'll be in touch with you soon.
            `;
            const description = document.createElement("div");
            description.setAttribute("class", "description");
            description.append(text, textBreak, action);
            return description;
        };

        const createForm = () => {
            const capitalizeWord = (str) => str.charAt(0).toUpperCase() + str.slice(1);

            const createLabel = (data) => {
                const asterisk = document.createElement("img");
                asterisk.src = "../src/img/asterisk.svg";
                asterisk.alt = "Required icon";
                const label = document.createElement("label");
                label.setAttribute("for", `user_${data}`);
                label.textContent = `${capitalizeWord(data)}`;
                label.appendChild(asterisk);
                return label;
            };

            const createInput = (data) => {
                if (data === "name") {
                    const input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute("maxlength", "30");
                    input.setAttribute("pattern", "[a-zA-Z0-9]+");
                    input.setAttribute(
                        "title",
                        "Please enter a valid name (must only contain letters or numbers)."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
                if (data === "email") {
                    const input = document.createElement("input");
                    input.setAttribute("type", "email");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute(
                        "title",
                        "Please enter a valid email address."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
                if (data === "message") {
                    const input = document.createElement("textarea");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute("cols", "20");
                    input.setAttribute("rows", "5");
                    input.setAttribute(
                        "title",
                        "Please enter your message here."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
            };

            const createField = (data) => {
                const field = document.createElement("div");
                field.setAttribute("class", "field");
                field.append(createLabel(data), createInput(data));
                return field;
            };

            const createSubmitBtn = () => {
                const btn = document.createElement("button");
                btn.setAttribute("type", "submit");
                btn.setAttribute("disabled", "");
                btn.textContent = "Submit";
                return btn;
            };

            const form = document.createElement("form");
            form.setAttribute("action", "#");
            form.setAttribute("method", "post");
            form.append(
                createField("name"),
                createField("email"),
                createField("message"),
                createSubmitBtn()
            );
            return form;
        };

        const content = document.createElement("section");
        content.setAttribute("class", "content");
        content.append(
            createTitle(),
            createDivider(),
            createDescription(),
            createForm()
        );
        return content;
    };

    const createSocials = () => {
        const createYelp = () => {
            const yelpIcon = document.createElement("img");
            yelpIcon.src = yelpImg;
            yelpIcon.alt = "Yelp icon";
            const yelpLink = document.createElement("a");
            yelpLink.setAttribute("href", "#");
            yelpLink.appendChild(yelpIcon);
            const yelp = document.createElement("li");
            yelp.appendChild(yelpLink);
            return yelp;
        };
    
        const createFacebook = () => {
            const facebookIcon = document.createElement("img");
            facebookIcon.src = facebookImg;
            facebookIcon.alt = "Facebook icon";
            const facebookLink = document.createElement("a");
            facebookLink.setAttribute("href", "#");
            facebookLink.appendChild(facebookIcon);
            const facebook = document.createElement("li");
            facebook.appendChild(facebookLink);
            return facebook;
        };
    
        const createInstagram = () => {
            const instagramIcon = document.createElement("img");
            instagramIcon.src = instagramImg;
            instagramIcon.alt = "Instagram icon";
            const instagramLink = document.createElement("a");
            instagramLink.setAttribute("href", "#");
            instagramLink.appendChild(instagramIcon);
            const instagram = document.createElement("li");
            instagram.appendChild(instagramLink);
            return instagram;
        };
    
        const socials = document.createElement("ul");
        socials.setAttribute("class", "socials");
        socials.append(
            createYelp(),
            createFacebook(),
            createInstagram()
        );
        return socials;
    };

    const main = document.createElement("main");
    main.append(createContent(), createSocials());
    return main;
};

const loadContactPage = () => {
    const contactPage = createPage("contact");
    contactPage.append(
        createHeader(),
        createNavMain(),
        createMainContent(),
        createFooter()
    );
};

export {
    loadContactPage
};
import { createHeader } from "./modules/page-elements/header";
import { createNavMain } from "./modules/page-elements/nav-main";
import { createFooter } from "./modules/page-elements/footer";
import { createHomePage } from "./modules/pages/home-page";
import { createAboutPage } from "./modules/pages/about-page";
import { createMenuPage } from "./modules/pages/menu-page";
import { createContactPage } from "./modules/pages/contact-page";
import { animateNavMain } from "./modules/page-functionalities/nav-main-functionality";
import { submitForm, transformInputs } from "./modules/page-functionalities/contact-page-functionality";
import "./css/style.css";
import "./css/reset.css";

const body = document.querySelector("body");
body.append(
    createHeader(),
    createNavMain(),
    createHomePage(),
    createAboutPage(),
    createMenuPage(),
    createContactPage(),
    createFooter()
);

animateNavMain();
transformInputs();
submitForm();

const hidePages = (...pages) => {
    for (const page of pages) page.style.display = "none";
};

const homePage = document.querySelector("#home-page");
const aboutPage = document.querySelector("#about-page");
const menuPage = document.querySelector("#menu-page");
const contactPage = document.querySelector("#contact-page");

window.addEventListener("pageshow", () => hidePages(aboutPage, menuPage, contactPage));

const pageLinks = document.querySelectorAll(".nav-main a");
for (const pageLink of pageLinks) {
    pageLink.addEventListener("click", () => {
        if (pageLink.parentElement.classList.contains("home")) {
            homePage.style.display = "flex";
            hidePages(aboutPage, menuPage, contactPage);
        }
        if (pageLink.parentElement.classList.contains("about")) {
            aboutPage.style.display = "flex";
            hidePages(homePage, menuPage, contactPage);
        }
        if (pageLink.parentElement.classList.contains("menu")) {
            menuPage.style.display = "flex";
            hidePages(homePage, aboutPage, contactPage)
        }
        if (pageLink.parentElement.classList.contains("contact")) {
            contactPage.style.display = "flex";
            hidePages(homePage, aboutPage, menuPage);
        }
    });
}
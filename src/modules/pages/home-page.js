import { createHeader } from "../page-elements/header";
import { createNavMain } from "../page-elements/nav-main";
import { createFooter } from "../page-elements/footer";
import { showSlide } from "../page-functionalities/home-page-functionality";
import { animateNavMain } from "../page-functionalities/nav-main-functionality";
import breakfastTableImg from "../../img/breakfast-table.jpg";
import toastsImg from "../../img/toasts.jpg";
import pancakesImg from "../../img/pancakes.jpg";

const createMainContent = () => {
    const createOverlay = () => {
        const overlay = document.createElement("div");
        overlay.setAttribute("class", "overlay");
        return overlay;
    };

    const createImg = (name) => {
        const img = document.createElement("img");
        img.setAttribute("class", "slide");
        if (name === "pancakes") {
            img.src = pancakesImg;
            img.alt = "Photo of pancakes, fruits, and chocolate";
        }
        if (name === "toasts") {
            img.src = toastsImg;
            img.alt = "Photo of various avocado toasts";
        }
        if (name === "table") {
            img.src = breakfastTableImg;
            img.alt = "Photo of a table full of breakfast dishes";
        }
        return img;
    };

    const createSlideshow = () => {
        const slideshow = document.createElement("div");
        slideshow.setAttribute("class", "slideshow");
        slideshow.append(
            createImg("pancakes"),
            createImg("toasts"),
            createImg("table")
        );
        return slideshow;
    };
    
    const createContent = () => {
        const createWelcome = () => {
            const welcome = document.createElement("h1");
            welcome.textContent = "Welcome to Stacks!";
            return welcome;
        };

        const createQuote = () => {
            const slogan = document.createElement("p");
            slogan.textContent = "Where more is better.";
            const subSlogan = document.createElement("p");
            subSlogan.textContent = "Serving mornings right since 1962.";
            const quote = document.createElement("blockquote");
            quote.append(slogan, subSlogan);
            return quote;
        };

        const createBtn = () => {
            const btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.textContent = "Book a table";
            return btn;
        };

        const content = document.createElement("div");
        content.setAttribute("class", "content");
        content.append(
            createWelcome(),
            createQuote(),
            createBtn()
        );
        return content;
    };
    
    const createNavDot = (index) => {
        const dot = document.createElement("span");
        dot.setAttribute("data-index", `${index}`);
        return dot;
    };

    const createNavSlideshow = () => {
        const navSlideshow = document.createElement("nav");
        navSlideshow.setAttribute("class", "nav-slideshow");
        navSlideshow.append(
            createNavDot(1),
            createNavDot(2),
            createNavDot(3)
        );
        return navSlideshow;
    };
    
    const main = document.createElement("main");
    main.append(
        createOverlay(),
        createSlideshow(),
        createContent(),
        createNavSlideshow()
    );
    return main;
};

const loadHomePage = () => {
    const homePage = document.querySelector("#home-page");
    homePage.append(
        createHeader(),
        createNavMain(),
        createMainContent(),
        createFooter()
    );
    showSlide();
    animateNavMain();
};

export {
    loadHomePage
};
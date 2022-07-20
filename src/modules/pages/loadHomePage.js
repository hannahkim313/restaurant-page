import { createHeader } from "../page-elements/createHeader";
import { createNavMain } from "../page-elements/createNavMain";
import { createFooter } from "../page-elements/createFooter";

const createSlideshow = () => {
    const overlay = () => {
        const overlay = document.createElement("div");
        overlay.setAttribute("class", "overlay");
        return overlay;
    };

    const createImg = (name) => {
        const img = document.createElement("img");
        if (name === "table") {
            img.src = "../src/img/breakfast-table.jpg";
            img.alt = "Photo of a table full of breakfast dishes";
        }
        if (name === "toasts") {
            img.src = "../src/img/toasts.jpg";
            img.alt = "Photo of various avocado toasts";
        }
        if (name === "pancakes") {
            img.src = "../src/img/pancakes.jpg";
            img.alt = "Photo of pancakes, fruits, and chocolate";
        }
        return img;
    };

    const slideshow = () => {
        const slideshow = document.createElement("div");
        slideshow.setAttribute("class", "slideshow");
        slideshow.append(
            createImg("table"),
            createImg("toasts"),
            createImg("pancakes")
        );
        return slideshow;
    };
    
    const content = () => {
        const welcome = () => {
            const welcome = document.createElement("h1");
            welcome.textContent = "Welcome to Stacks!";
            return welcome;
        };

        const quote = () => {
            const slogan = document.createElement("p");
            slogan.textContent = "Where more is better.";
            const subSlogan = document.createElement("p");
            subSlogan.textContent = "Serving mornings right since 1962.";
            const quote = document.createElement("blockquote");
            quote.append(slogan, subSlogan);
            return quote;
        };

        const btn = () => {
            const btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.textContent = "Book a table";
            return btn;
        };

        const content = document.createElement("div");
        content.setAttribute("class", "content");
        content.append(welcome(), quote(), btn());
        return content;
    };
    
    const createNavDot = (index) => {
        const dot = document.createElement("span");
        dot.setAttribute("data-index", `${index}`);
        return dot;
    };

    const navSlideshow = () => {
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
        overlay(),
        slideshow(),
        content(),
        navSlideshow()
    );

    return main;
};

const loadHomePage = () => {
    const homePage = document.querySelector("#home-page");
    homePage.append(
        createHeader(),
        createNavMain(),
        createSlideshow(),
        createFooter()
    );
};

export {
    loadHomePage
};
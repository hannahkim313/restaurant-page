const createHeader = () => {
    const mapIcon = document.createElement("img");
    mapIcon.src = "../src/img/map-marker.svg";
    mapIcon.alt = "Map marker icon";
    const mapInfo = document.createElement("p");
    mapInfo.textContent = "123 Pine Street, Portland OR";

    const dividerOne = document.createElement("p");
    dividerOne.textContent = "|";

    const clockIcon = document.createElement("img");
    clockIcon.src = "../src/img/clock.svg";
    clockIcon.alt = "Clock icon";
    const hours = document.createElement("p");
    hours.textContent = "Monday - Friday 10AM - 2PM, Saturday and Sunday 9AM - 2PM";

    const dividerTwo = document.createElement("p");
    dividerTwo.textContent = "|";

    const phoneIcon = document.createElement("img");
    phoneIcon.src = "../src/img/phone.svg";
    phoneIcon.alt = "Phone icon";
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "(123) 456-7890";

    const address = document.createElement("address");
    address.append(
        mapIcon,
        mapInfo,
        dividerOne,
        clockIcon,
        hours,
        dividerTwo,
        phoneIcon,
        phoneNumber
    );

    const header = document.createElement("header");
    header.appendChild(address);

    const homePage = document.querySelector("#home-page");
    homePage.appendChild(header);
};

const createNavMain = () => {
    const homeLink = document.createElement("a");
    homeLink.setAttribute("href", "#");
    homeLink.textContent = "Home";
    const homeUnderline = document.createElement("div");
    homeUnderline.setAttribute("class", "underline");
    const home = document.createElement("li");
    home.setAttribute("class", "home");
    home.append(homeLink, homeUnderline);
    
    const aboutLink = document.createElement("a");
    aboutLink.setAttribute("href", "#");
    aboutLink.textContent = "About";
    const aboutUnderline = document.createElement("div");
    aboutUnderline.setAttribute("class", "underline");
    const about = document.createElement("li");
    about.setAttribute("class", "about");
    about.append(aboutLink, aboutUnderline);

    const logoImg = document.createElement("img");
    logoImg.src = "../src/img/pancakes.png";
    logoImg.alt = "Pancakes vector art";
    const logoLink = document.createElement("a");
    logoLink.setAttribute("href", "#");
    logoLink.appendChild(logoImg);
    const logo = document.createElement("li");
    logo.setAttribute("class", "logo");
    logo.appendChild(logoLink);

    const menuLink = document.createElement("a");
    menuLink.setAttribute("href", "#");
    menuLink.textContent = "Menu";
    const menuUnderline = document.createElement("div");
    menuUnderline.setAttribute("class", "underline");
    const menu = document.createElement("li");
    menu.setAttribute("class", "menu");
    menu.append(menuLink, menuUnderline);

    const contactLink = document.createElement("a");
    contactLink.setAttribute("href", "#");
    contactLink.textContent = "Contact";
    const contactUnderline = document.createElement("div");
    contactUnderline.setAttribute("class", "underline");
    const contact = document.createElement("li");
    contact.setAttribute("class", "contact");
    contact.append(contactLink, contactUnderline);

    const links = document.createElement("ul");
    links.append(home, about, logo, menu, contact);

    const nav = document.createElement("nav");
    nav.setAttribute("class", "nav-main");
    nav.appendChild(links);

    const homePage = document.querySelector("#home-page");
    homePage.appendChild(nav);
};

const createSlideshow = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");

    const imgOne = document.createElement("img");
    imgOne.src = "../src/img/breakfast-table.jpg";
    imgOne.alt = "Photo of a table full of breakfast dishes";
    const imgTwo = document.createElement("img");
    imgTwo.src = "../src/img/toasts.jpg";
    imgTwo.alt = "Photo of various avocado toasts";
    const imgThree = document.createElement("img");
    imgThree.src = "../src/img/pancakes.jpg";
    imgThree.alt = "Photo of pancakes, fruits, and chocolate";

    const slideshow = document.createElement("div");
    slideshow.setAttribute("class", "slideshow");
    slideshow.append(imgOne, imgTwo, imgThree);

    const welcome = document.createElement("h1");
    welcome.textContent = "Welcome to Stacks!";
    const slogan = document.createElement("p");
    slogan.textContent = "Where more is better.";
    const subSlogan = document.createElement("p");
    subSlogan.textContent = "Serving mornings right since 1962.";
    const quote = document.createElement("blockquote");
    quote.append(slogan, subSlogan);
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.textContent = "Book a table";

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.append(welcome, quote, btn);

    const dotOne = document.createElement("span");
    dotOne.setAttribute("data-index", "1");
    const dotTwo = document.createElement("span");
    dotTwo.setAttribute("data-index", "2");
    const dotThree = document.createElement("span");
    dotThree.setAttribute("data-index", "3");
    const navSlideshow = document.createElement("nav");
    navSlideshow.setAttribute("class", "nav-slideshow");
    navSlideshow.append(dotOne, dotTwo, dotThree);

    const main = document.createElement("main");
    main.append(overlay, slideshow, content, navSlideshow);

    const homePage = document.querySelector("#home-page");
    homePage.appendChild(main);
};

const createFooter = () => {
    const githubIcon = document.createElement("i");
    githubIcon.setAttribute("class", "fa fa-github");
    const caption = document.createElement("p");
    caption.textContent = "Hannah Kim";
    
    const link = document.createElement("a");
    link.setAttribute("href", "https://github.com/hannahkim313");
    link.append(githubIcon, caption);

    const footer = document.createElement("footer");
    footer.append(link);

    const homePage = document.querySelector("#home-page");
    homePage.appendChild(footer);
};

const loadHomePage = () => {
    createHeader();
    createNavMain();
    createSlideshow();
    createFooter();
};

export {
    loadHomePage
};
const createAboutPage = () => {
    const aboutPage = document.createElement("div");
    aboutPage.setAttribute("id", "about-page");

    const body = document.querySelector("body");
    body.appendChild(aboutPage);

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
    
        aboutPage.appendChild(header);
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
    
        aboutPage.appendChild(nav);
    };
    
    const createMainContent = () => {
        const title = document.createElement("h2");
        title.textContent = "Who We Are";
    
        const divider = document.createElement("div");
        divider.setAttribute("class", "content-divider");
    
        const captionOne = document.createElement("p");
        captionOne.textContent = `Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Nostrum dignissimos error architecto corrupti 
        voluptatibus expedita ab consequuntur a optio nisi! Corrupti quis 
        ratione, error ea, illum harum repellat omnis blanditiis quod 
        dignissimos voluptatem nesciunt velit illo adipisci animi 
        laudantium cum eum dolores, ab totam sequi est! Dignissimos rem 
        excepturi qui.`;
        const br = document.createElement("br");
        const captionTwo = document.createElement("p");
        captionTwo.textContent = `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quis dolore corporis placeat dolorum exercitationem 
        similique dignissimos, eos blanditiis ipsum beatae culpa veniam quasi 
        accusantium magnam.`;
        
        const section = document.createElement("section");
        section.setAttribute("class", "content");
        section.append(title, divider, captionOne, captionTwo);
    
        const yelpIcon = document.createElement("img");
        yelpIcon.src = "../src/img/yelp.png";
        yelpIcon.alt = "Yelp icon";
        const yelpLink = document.createElement("a");
        yelpLink.setAttribute("href", "#");
        yelpLink.appendChild(yelpIcon);
        const yelp = document.createElement("li");
        yelp.appendChild(yelpLink);
    
        const facebookIcon = document.createElement("img");
        facebookIcon.src = "../src/img/facebook.png";
        facebookIcon.alt = "Facebook icon";
        const facebookLink = document.createElement("a");
        facebookLink.setAttribute("href", "#");
        facebookLink.appendChild(facebookIcon);
        const facebook = document.createElement("li");
        facebook.appendChild(facebookLink);
    
        const instagramIcon = document.createElement("img");
        instagramIcon.src = "../src/img/instagram.png";
        instagramIcon.alt = "Instagram icon";
        const instagramLink = document.createElement("a");
        instagramLink.setAttribute("href", "#");
        instagramLink.appendChild(instagramIcon);
        const instagram = document.createElement("li");
        instagram.appendChild(instagramLink);
    
        const socials = document.createElement("ul");
        socials.append(yelp, facebook, instagram);
    
        const main = document.createElement("main");
        main.append(section, socials);
    
        aboutPage.appendChild(main);
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
    
        aboutPage.appendChild(footer);
    };

    createHeader();
    createNavMain();
    createMainContent();
    createFooter();
};

const loadAboutPage = () => {
    createAboutPage();
}

export {
    loadAboutPage
};
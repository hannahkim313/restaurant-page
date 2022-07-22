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
            title.textContent = "Who We Are";
            return title;
        };
        
        const createDivider = () => {
            const divider = document.createElement("div");
            divider.setAttribute("class", "content-divider");
            return divider;
        };

        const createCaptionOne = () => {
            const captionOne = document.createElement("p");
            captionOne.textContent = `Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Nostrum dignissimos error architecto corrupti 
            voluptatibus expedita ab consequuntur a optio nisi! Corrupti quis 
            ratione, error ea, illum harum repellat omnis blanditiis quod 
            dignissimos voluptatem nesciunt velit illo adipisci animi 
            laudantium cum eum dolores, ab totam sequi est! Dignissimos rem 
            excepturi qui.`;
            return captionOne;
        };

        const createBreak = () => document.createElement("br");

        const createCaptionTwo = () => {
            const captionTwo = document.createElement("p");
            captionTwo.textContent = `Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Quis dolore corporis placeat dolorum exercitationem 
            similique dignissimos, eos blanditiis ipsum beatae culpa veniam quasi 
            accusantium magnam.`;
            return captionTwo;
        };

        const content = document.createElement("section");
        content.setAttribute("class", "content");
        content.append(
            createTitle(),
            createDivider(),
            createCaptionOne(),
            createBreak(),
            createCaptionTwo()
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

const loadAboutPage = () => {
    const aboutPage = createPage("about");
    aboutPage.append(
        createHeader(),
        createNavMain(),
        createMainContent(),
        createFooter()
    );
};

export {
    loadAboutPage
};
import { createPage } from "../page-elements/page";
import { createHeader } from "../page-elements/header";
import { createNavMain } from "../page-elements/nav-main";
import { createFooter } from "../page-elements/footer";
import { createContentDivider } from "../page-elements/content-divider";
import { createSocials } from "../page-elements/socials";
import { createPageTitle } from "../page-elements/page-title";
    
const createMainContent = () => {
    const createContent = () => {
        const createCaptionOne = () => {
            const captionOne = document.createElement("p");
            captionOne.textContent = `
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Nostrum dignissimos error architecto corrupti 
                voluptatibus expedita ab consequuntur a optio nisi! Corrupti quis 
                ratione, error ea, illum harum repellat omnis blanditiis quod 
                dignissimos voluptatem nesciunt velit illo adipisci animi 
                laudantium cum eum dolores, ab totam sequi est! Dignissimos rem 
                excepturi qui.
            `;
            return captionOne;
        };

        const createBreak = () => document.createElement("br");

        const createCaptionTwo = () => {
            const captionTwo = document.createElement("p");
            captionTwo.textContent = `
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quis dolore corporis placeat dolorum
                exercitationem  similique dignissimos, eos blanditiis ipsum
                beatae culpa veniam quasi accusantium magnam.
            `;
            return captionTwo;
        };

        const content = document.createElement("section");
        content.setAttribute("class", "content");
        content.append(
            createPageTitle("about"),
            createContentDivider(),
            createCaptionOne(),
            createBreak(),
            createCaptionTwo()
        );
        return content;
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
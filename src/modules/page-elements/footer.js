import githubImg from "../../img/github.png";

const createFooter = () => {
    const createContent = () => {
        const githubIcon = document.createElement("img");
        githubIcon.src = githubImg;
        githubIcon.alt = "Github icon";
        const caption = document.createElement("p");
        caption.textContent = "Hannah Kim";
        const content = document.createElement("a");
        content.setAttribute("href", "https://github.com/hannahkim313");
        content.append(githubIcon, caption);
        return content;
    };

    const footer = document.createElement("footer");
    footer.appendChild(createContent());
    return footer;
};

export {
    createFooter
};
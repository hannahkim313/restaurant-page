const createFooter = () => {
    const content = () => {
        const githubIcon = document.createElement("img");
        githubIcon.src = "../src/img/github.png";
        githubIcon.alt = "Github icon";
        const caption = document.createElement("p");
        caption.textContent = "Hannah Kim";
        const content = document.createElement("a");
        content.setAttribute("href", "https://github.com/hannahkim313");
        content.append(githubIcon, caption);
        return content;
    };

    const footer = document.createElement("footer");
    footer.appendChild(content());
    return footer;
};

export {
    createFooter
};
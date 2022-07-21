const createPage = (pageName) => {
    const page = document.createElement("div");
    page.setAttribute("id", `${pageName}-page`);
    const body = document.querySelector("body");
    body.appendChild(page);
    return page;
};

export {
    createPage
};
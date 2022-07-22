const createPageTitle = (page) => {
    const title = document.createElement("h2");
    if (page === "about") title.textContent = "Who We Are";
    if (page === "menu") title.textContent = "Menu";
    if (page === "contact") title.textContent = "Contact Us";
    return title;
};

export {
    createPageTitle
};
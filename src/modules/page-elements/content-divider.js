const createContentDivider = () => {
    const divider = document.createElement("div");
    divider.setAttribute("class", "content-divider");
    return divider;
};

export {
    createContentDivider
};
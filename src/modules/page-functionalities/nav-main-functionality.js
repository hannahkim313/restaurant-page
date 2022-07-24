const getActiveLink = () => {
    const links = document.querySelectorAll(".nav-main a");
    for (const link of links) {
        const linkProps = window.getComputedStyle(link);
        if (linkProps.getPropertyValue("color") === "rgb(208, 127, 142)") return link;
    }
};

const animateNavMain = () => {
    const links = document.querySelectorAll(".nav-main a");
    for (const link of links) {
        link.addEventListener("click", () => {
            const activeLink = getActiveLink();
            if (link !== activeLink) {
                link.style.color = "var(--main-font-color-light)";
                activeLink.style.color = "var(--main-font-color)";
            }
        });
    }
};

export {
    animateNavMain
};
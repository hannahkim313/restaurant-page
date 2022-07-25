const animateNavMain = () => {
    let activeLink = document.querySelector(".nav-main .home a");

    const makeActive = (link) => {
        activeLink.style.color = "var(--main-font-color)";
        const activeUnderline = activeLink.nextElementSibling;
        activeUnderline.style.backgroundColor = "white";
        link.style.color = "var(--main-font-color-light)";
        const underline = link.nextElementSibling;
        underline.style.backgroundColor = "var(--orange)";
    };

    const links = document.querySelectorAll(".nav-main a");
    for (const link of links) {
        link.addEventListener("click", () => {
            if (link !== activeLink && !link.parentElement.classList.contains("logo")) {
                makeActive(link);
                activeLink = link;
            } else {
                location.reload();
            }
        });
        link.addEventListener("mouseover", () => {
            link.style.color = "var(--main-font-color-light)";
        });
        link.addEventListener("mouseout", () => {
            if (link !== activeLink) link.style.color = "var(--main-font-color)";
        });
    }
};

export {
    animateNavMain
};
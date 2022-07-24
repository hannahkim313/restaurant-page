const showSlide = () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    for (const slide of slides) {
        slide.style.display = "none";
    }
    const navDots = document.querySelectorAll("span");
    for (const dot of navDots) {
        dot.style.backgroundColor = "var(--grey)";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    navDots[slideIndex - 1].style.backgroundColor = "var(--dark-grey)";
    setTimeout(() => showSlide(slideIndex), 5000);
};

export {
    showSlide
}
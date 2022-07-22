import yelpImg from "../../img/yelp.png";
import facebookImg from "../../img/facebook.png";
import instagramImg from "../../img/instagram.png";

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

export {
    createSocials
};
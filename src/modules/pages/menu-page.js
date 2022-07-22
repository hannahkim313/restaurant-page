import { createPage } from "../page-elements/page";
import { createHeader } from "../page-elements/header";
import { createNavMain } from "../page-elements/nav-main";
import { createFooter } from "../page-elements/footer";
import yelpImg from "../../img/yelp.png";
import facebookImg from "../../img/facebook.png";
import instagramImg from "../../img/instagram.png";

const createMainContent = () => {
    const createMenu = () => {
        const createMenuTitle = () => {
            const title = document.createElement("h2");
            title.textContent = "Menu";
            return title;
        };

        const createDivider = () => {
            const divider = document.createElement("div");
            divider.setAttribute("class", "content-divider");
            return divider;
        };

        const createDish = (meal, itemNum) => {
            const createDishName = () => {
                const dishName = document.createElement("h4");
                if (meal === "breakfast") {
                    dishName.textContent = itemNum === "one" ? "House Pancakes 13"
                    : itemNum === "two" ? "Avocado Toast 12"
                    : itemNum === "three" ? "Sunshine Skillet 16"
                    : "The Better Benedict 16";
                }
                if (meal === "lunch") {
                    dishName.textContent = itemNum === "one" ? "Veggie Sandwich 13"
                    : itemNum === "two" ? "French Onion Soup 9"
                    : itemNum === "three" ? "Stacked Burger 18"
                    : "House Salad 14";
                }
                return dishName;
            };
            
            const createDishInfo = () => {
                const dishInfo = document.createElement("p");
                dishInfo.textContent = `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto eligendi saepe repellat nostrum quis corrupti.
                `;
                return dishInfo;
            };
                
            const dish = document.createElement("article");
            dish.setAttribute("class", `dish ${itemNum}`);
            dish.append(createDishName(), createDishInfo());
            return dish;
        }

        const createMenuItems = (meal) => {
            const menuItems = document.createElement("div");
            menuItems.setAttribute("class", "menu-items");
            menuItems.append(
                createDish(meal, "one"),
                createDish(meal, "two"),
                createDish(meal, "three"),
                createDish(meal, "four")
            );
            return menuItems;
        };

        const createMealTitle = (meal) => {
            const mealTitle = document.createElement("h3");
            mealTitle.textContent = meal === "breakfast" ? "Breakfast" : "Lunch";
            return mealTitle;
        };

        const createMealArticle = (meal) => {
            const article = document.createElement("article");
            article.setAttribute("class", `${meal}`);
            article.append(
                createMealTitle(meal),
                createMenuItems(meal)
            );
            return article;
        };

        const menu = document.createElement("section");
        menu.setAttribute("class", "menu");
        menu.append(
            createMenuTitle(),
            createDivider(),
            createMealArticle("breakfast"),
            createDivider(),
            createMealArticle("lunch")
        );
        return menu;
    };

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

    const main = document.createElement("main");
    main.append(createMenu(), createSocials());
    return main;
};

const loadMenuPage = () => {
    const menuPage = createPage("menu");
    menuPage.append(
        createHeader(),
        createNavMain(),
        createMainContent(),
        createFooter()
    );
};

export {
    loadMenuPage
};
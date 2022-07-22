import { createPage } from "../page-elements/page";
import { createHeader } from "../page-elements/header";
import { createNavMain } from "../page-elements/nav-main";
import { createFooter } from "../page-elements/footer";
import { createContentDivider } from "../page-elements/content-divider";
import { createSocials } from "../page-elements/socials";
import { createPageTitle } from "../page-elements/page-title";

const createMainContent = () => {
    const createMenu = () => {
        const createDish = (meal, itemNum) => {
            const createDishName = () => {
                const dishName = document.createElement("h4");
                if (meal === "breakfast") {
                    if (itemNum === "one") dishName.textContent = "House Pancakes 13";
                    if (itemNum === "two") dishName.textContent = "Avocado Toast 12";
                    if (itemNum === "three") dishName.textContent = "Sunshine Skillet 16";
                    if (itemNum === "four") dishName.textContent = "The Better Benedict 16";
                }
                if (meal === "lunch") {
                    if (itemNum === "one") dishName.textContent = "Veggie Sandwich 13";
                    if (itemNum === "two") dishName.textContent = "French Onion Soup 9";
                    if (itemNum === "three") dishName.textContent = "Stacked Burger 18";
                    if (itemNum === "four") dishName.textContent = "House Salad 14";
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
        };

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
            createPageTitle("menu"),
            createContentDivider(),
            createMealArticle("breakfast"),
            createContentDivider(),
            createMealArticle("lunch")
        );
        return menu;
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
// Import images

const createHeader = () => {
    const mapIcon = document.createElement("img");
    mapIcon.src = "../src/img/map-marker.svg";
    mapIcon.alt = "Map marker icon";
    const mapInfo = document.createElement("p");
    mapInfo.textContent = "123 Pine Street, Portland OR";
    
    const dividerOne = document.createElement("p");
    dividerOne.textContent = "|";
    
    const clockIcon = document.createElement("img");
    clockIcon.src = "../src/img/clock.svg";
    clockIcon.alt = "Clock icon";
    const hours = document.createElement("p");
    hours.textContent = "Monday - Friday 10AM - 2PM, Saturday and Sunday 9AM - 2PM";
    
    const dividerTwo = document.createElement("p");
    dividerTwo.textContent = "|";
    
    const phoneIcon = document.createElement("img");
    phoneIcon.src = "../src/img/phone.svg";
    phoneIcon.alt = "Phone icon";
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "(123) 456-7890";
    
    const address = document.createElement("address");
    address.append(
        mapIcon,
        mapInfo,
        dividerOne,
        clockIcon,
        hours,
        dividerTwo,
        phoneIcon,
        phoneNumber
    );
    
    const header = document.createElement("header");
    header.appendChild(address);

    return header;
};

export {
    createHeader
};
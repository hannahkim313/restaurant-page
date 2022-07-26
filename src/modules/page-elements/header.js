import mapMarkerImg from "../../img/map-marker.svg";
import clockImg from "../../img/clock.svg";
import phoneImg from "../../img/phone.svg";

const createHeader = () => {
    const createDivider = () => {
        const divider = document.createElement("p");
        divider.textContent = "|";
        return divider;
    };
    
    const createMap = () => {
        const mapIcon = document.createElement("img");
        mapIcon.src = mapMarkerImg;
        mapIcon.alt = "Map marker icon";
        const mapInfo = document.createElement("p");
        mapInfo.textContent = "123 Pine Street, Portland OR";
        const map = document.createElement("div");
        map.append(mapIcon, mapInfo);
        return map;
    };
    
    const createHours = () => {
        const clockIcon = document.createElement("img");
        clockIcon.src = clockImg;
        clockIcon.alt = "Clock icon";
        const hoursInfo = document.createElement("p");
        hoursInfo.textContent = "Monday - Friday 10AM - 2PM, Saturday and Sunday 9AM - 2PM";
        const hours = document.createElement("div");
        hours.append(clockIcon, hoursInfo);
        return hours;
    };

    const createPhoneNumber = () => {
        const phoneIcon = document.createElement("img");
        phoneIcon.src = phoneImg;
        phoneIcon.alt = "Phone icon";
        const phoneNumberInfo = document.createElement("p");
        phoneNumberInfo.textContent = "(123) 456-7890";
        const phoneNumber = document.createElement("div");
        phoneNumber.append(phoneIcon, phoneNumberInfo);
        return phoneNumber;
    };

    const address = document.createElement("address");
    address.append(
        createMap(),
        createDivider(),
        createHours(),
        createDivider(),
        createPhoneNumber()
    );
    
    const header = document.createElement("header");
    header.appendChild(address);
    return header;
};

export {
    createHeader
};
import mapMarkerImg from "../../img/map-marker.svg";
import clockImg from "../../img/clock.svg";
import phoneImg from "../../img/phone.svg";

const createHeader = () => {
    const createMapIcon = () => {
        const mapIcon = document.createElement("img");
        mapIcon.src = mapMarkerImg;
        mapIcon.alt = "Map marker icon";
        return mapIcon;
    };

    const createMapInfo = () => {
        const mapInfo = document.createElement("p");
        mapInfo.textContent = "123 Pine Street, Portland OR";
        return mapInfo;
    };
    
    const createDivider = () => {
        const divider = document.createElement("p");
        divider.textContent = "|";
        return divider;
    };
    
    const createClockIcon = () => {
        const clockIcon = document.createElement("img");
        clockIcon.src = clockImg;
        clockIcon.alt = "Clock icon";
        return clockIcon;
    };
    
    const createHours = () => {
        const hours = document.createElement("p");
        hours.textContent = "Monday - Friday 10AM - 2PM, Saturday and Sunday 9AM - 2PM";
        return hours;
    };

    const createPhoneIcon = () => {
        const phoneIcon = document.createElement("img");
        phoneIcon.src = phoneImg;
        phoneIcon.alt = "Phone icon";
        return phoneIcon;
    };

    const createPhoneNumber = () => {
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = "(123) 456-7890";
        return phoneNumber;
    };
    
    const address = document.createElement("address");
    address.append(
        createMapIcon(),
        createMapInfo(),
        createDivider(),
        createClockIcon(),
        createHours(),
        createDivider(),
        createPhoneIcon(),
        createPhoneNumber()
    );
    
    const header = document.createElement("header");
    header.appendChild(address);
    return header;
};

export {
    createHeader
};
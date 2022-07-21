import mapMarkerImg from "../../img/map-marker.svg";
import clockImg from "../../img/clock.svg";
import phoneImg from "../../img/phone.svg";

const createHeader = () => {
    const mapIcon = () => {
        const mapIcon = document.createElement("img");
        mapIcon.src = mapMarkerImg;
        mapIcon.alt = "Map marker icon";
        return mapIcon;
    };

    const mapInfo = () => {
        const mapInfo = document.createElement("p");
        mapInfo.textContent = "123 Pine Street, Portland OR";
        return mapInfo;
    };
    
    const createDivider = () => {
        const divider = document.createElement("p");
        divider.textContent = "|";
        return divider;
    };
    
    const clockIcon = () => {
        const clockIcon = document.createElement("img");
        clockIcon.src = clockImg;
        clockIcon.alt = "Clock icon";
        return clockIcon;
    };
    
    const hours = () => {
        const hours = document.createElement("p");
        hours.textContent = "Monday - Friday 10AM - 2PM, Saturday and Sunday 9AM - 2PM";
        return hours;
    };

    const phoneIcon = () => {
        const phoneIcon = document.createElement("img");
        phoneIcon.src = phoneImg;
        phoneIcon.alt = "Phone icon";
        return phoneIcon;
    };

    const phoneNumber = () => {
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = "(123) 456-7890";
        return phoneNumber;
    };
    
    const address = document.createElement("address");
    address.append(
        mapIcon(),
        mapInfo(),
        createDivider(),
        clockIcon(),
        hours(),
        createDivider(),
        phoneIcon(),
        phoneNumber()
    );
    
    const header = document.createElement("header");
    header.appendChild(address);
    return header;
};

export {
    createHeader
};
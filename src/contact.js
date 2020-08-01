function addContact(parent) {
    const contact = document.createElement("div");
    contact.id = "contact-div";
    const text = document.createElement("div");
    text.id = "text-div";

    // Paragraphs for each text needed
    const hours = document.createElement("p");
    hours.textContent = "Opening Hours:";
    const shortHours = document.createElement("p");
    shortHours.textContent = "Mon - Thur: 11am - 9pm";
    const longHours = document.createElement("p");
    longHours.textContent = "Fri - Sun: 9am - 11pm";

    const phone = document.createElement("p");
    phone.textContent = "Phone: 01 2345 6789";
    const email = document.createElement("p");
    email.textContent = "Email: info@therestaurant.com";
    const location = document.createElement("p");
    location.textContent = "Location: ";
    const address = document.createElement("p");
    address.textContent = "54 Cuisine Avenue, Eatville, Foodland"


    // Append together
    text.appendChild(hours);
    text.appendChild(shortHours);
    text.appendChild(longHours);
    text.appendChild(location);
    text.appendChild(address);
    text.appendChild(phone);
    text.appendChild(email);

    contact.appendChild(text);
    parent.appendChild(contact);
}

export default addContact
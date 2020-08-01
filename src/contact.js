// Add to restaurant page when contact selected
function addContact(parent) {
    const contact = document.createElement("div");
    contact.id = "contact-div";
    const text = document.createElement("div");
    text.id = "text-div";

    // Paragraphs for each text needed
    // Opening hours
    const hours = document.createElement("p");
    hours.textContent = "Opening Hours:";
    hours.style.fontWeight = 900;
    const shortHours = document.createElement("p");
    shortHours.textContent = "Mon - Thur: 11am - 9pm";
    const longHours = document.createElement("p");
    longHours.textContent = "Fri - Sun: 9am - 11pm";

    // Address
    const location = document.createElement("p");
    location.textContent = "Location: ";
    location.style.fontWeight = 900;
    const address = document.createElement("p");
    address.textContent = "54 Cuisine Avenue, Eatville, Foodland"

    // Phone
    const phone = document.createElement("p");
    phone.textContent = "Phone: ";
    phone.style.fontWeight = 900;
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "01 2345 6789";

    // Email
    const email = document.createElement("p");
    email.textContent = "Email: ";
    email.style.fontWeight = 900;
    const emailAddress = document.createElement("p");
    emailAddress.textContent = "info@therestaurant.com";

    // Append together
    text.appendChild(hours);
    text.appendChild(shortHours);
    text.appendChild(longHours);
    text.appendChild(location);
    text.appendChild(address);
    text.appendChild(phone);
    text.appendChild(phoneNumber);
    text.appendChild(email);
    text.appendChild(emailAddress);

    contact.appendChild(text);
    parent.appendChild(contact);
}

export default addContact
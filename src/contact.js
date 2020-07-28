function addContact(parent) {
    let contact = document.createElement("div");
    contact.id = "contact-div"
    contact.textContent = "contact";

    parent.appendChild(contact);
}

export default addContact
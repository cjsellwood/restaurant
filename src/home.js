function addHome(parent) {
    let description = document.createElement("div");
    description.id = "description";

    let paragraph = document.createElement("p");
    paragraph.textContent = "The Restaurant is good, because it has good food. \
        The Restaurant is good, because it has good food. \
        The Restaurant is good, because it has good food. \
        The Restaurant is good, because it has good food."
    
    description.appendChild(paragraph);



    parent.appendChild(description);
}

export default addHome
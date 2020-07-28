function addMenu(parent) {
    let menu = document.createElement("div");
    menu.id = "menu-div"
    menu.textContent = "menu";

    parent.appendChild(menu);
}

export default addMenu
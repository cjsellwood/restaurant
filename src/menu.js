function addMenu(parent) {
    let menu = document.createElement("div");
    menu.id = "menu-div";
    
    const sources = ['pizza.jpg', 'fish_and_chips.jpg', 'burger.jpg',
         'beef_ragu.jpg', 'pancakes.jpg', 'blueberry_cheesecake.jpg'];

    const names = ['Pizza', 'Fish and Chips', 'Burger',
        'Beef Ragu', 'Pancakes', 'Blueberry Cheesecake'];

    const prices = ['$12.00', '$10.00', '$9.00', '$14.00', '$8.00', '$7.00'];

    // Create a menu item for each image source
    for (let i = 0; i < sources.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");

        // Create image
        let menuImg = document.createElement('img');
        menuImg.classList.add("menu-image");
        menuImg.src = sources[i];

        // Bottom text
        let bottomText = document.createElement('div');
        bottomText.classList.add("bottom-text");

        let nameText = document.createElement('div');
        nameText.classList.add("name-text");
        nameText.textContent = names[i];

        let priceText = document.createElement('div');
        priceText.classList.add("price-text");
        priceText.textContent = prices[i];

        bottomText.appendChild(nameText);
        bottomText.appendChild(priceText);


        // Join elements into layout
        menuItem.appendChild(menuImg);
        menuItem.appendChild(bottomText);
        menu.appendChild(menuItem);

    }


    parent.appendChild(menu);
}

export default addMenu
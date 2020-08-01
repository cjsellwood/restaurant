// Add title and nav bar to the restaurant page
function addTop(parent) {
    // Create main container for all 
    let main = document.createElement('div');
    main.id = "main";

    // Create title element and append to main
    let title = document.createElement('div');
    title.id = "title";
    let heading = document.createElement('h1');
    heading.textContent = "The Restaurant";
    title.appendChild(heading);
    main.appendChild(title);

    // Create tabs and append to main
    let tabs = document.createElement('div');
    tabs.id = "tabs";
    
    let home = document.createElement('div');
    home.id = "home";
    home.textContent = "Home";
    tabs.appendChild(home);

    let menu = document.createElement("div");
    menu.id = "menu";
    menu.textContent = "Menu";
    tabs.appendChild(menu);

    let contact = document.createElement("div");
    contact.id = "contact";
    contact.textContent = "Contact";
    tabs.appendChild(contact);

    main.appendChild(tabs);
    parent.appendChild(main);
}

export default addTop
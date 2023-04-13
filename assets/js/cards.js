window.addEventListener("load", function(){
    const main = document.querySelector("main");
    
    collection.forEach(element => {

        // article--cards
        let article = document.createElement("article");
        let sectionBanner = document.createElement("section");
        let sectionText = document.createElement("section");

        main.append(article);
        article.append(sectionBanner);
        article.append(sectionText);
        article.classList.add("article--cards");

        /* ------- sectionBanner ------- */

        // Image banner
        sectionBanner.classList.add("article__banner");
        sectionBanner.style.backgroundImage = element.cover;

        /* ------- sectionText ------- */

        // List of types by tags
        let tags = document.createElement('ul');
        sectionText.classList.add("article__text");
        tags.classList.add("article__tags__ul");
        sectionText.append(tags);
        
        // Add tags for each game
        element.types.forEach(tag => {
            let tagli = document.createElement('li');
            tags.append(tagli);
            let tagText = document.createTextNode(tag);
            tagli.appendChild(tagText);

            // Colour gestion of game tags per type of game
            switch(tag){
                case "Action":
                    tagli.style.backgroundColor="#C84C0C";
                    break;
                case "Adventure":
                    tagli.style.backgroundColor="darkgreen";
                    break;
                case "Build":
                    tagli.style.backgroundColor="#148FDC";
                    break;
                case "Hack'n'slash":
                    tagli.style.backgroundColor="#1E1E1E";
                    break;
                case "Platforms":
                    tagli.style.backgroundColor="#74564C";
                    break;
                case "RPG":
                    tagli.style.backgroundColor="#F99841";
                    break;
                case "Sandbox":
                    tagli.style.backgroundColor="#6F6F6F";
                    break;
                case "Shooter":
                    tagli.style.backgroundColor="#9B0A16";
                    break;
                case "Survival":
                    tagli.style.backgroundColor="#506D6B";
                    break;
                default:
                    break;
            }
        });

        // Game title of cards
        let title = document.createElement('h2');
        sectionText.append(title);
        title.textContent=element.name;

        // Game platforms supported
        // let titlePlateforms = document.createElement('h3');
        // titlePlateforms.textContent="Compatibilities";
        // sectionText.append(titlePlateforms);
        let platforms = document.createElement('ul');
        platforms.classList.add("article__platform__ul");
        sectionText.append(platforms);
        element.platforms.forEach(platform => {
            let platformli = document.createElement('li');
            platforms.append(platformli);
            let platformText = document.createTextNode(platform);
            platformli.appendChild(platformText);
        });
    });
});



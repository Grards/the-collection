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

        // sectionBanner
        sectionBanner.classList.add("article__banner");
        sectionBanner.style.backgroundImage = element.cover;

        // sectionText
        let tags = document.createElement('ul');
        
        let title = document.createElement('h2');

        sectionText.classList.add("article__text");

        tags.classList.add("article__text__ul");
        sectionText.append(tags);
        
        element.genres.forEach(tag => {
            let tagli = document.createElement('li');
            tags.append(tagli);
            let tagText = document.createTextNode(tag);
            tagli.appendChild(tagText);
        });

        sectionText.append(title);

        

        title.textContent=element.name;
    });

    
    

});



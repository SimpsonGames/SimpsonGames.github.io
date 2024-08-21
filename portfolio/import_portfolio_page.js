function importInfo(fileName)
{
    fetch(fileName)
        .then(response => response.json())
        .then(data => {

            //create about me section
            const infoContainer = document.querySelector('#info-container');
            
            let pageInfo = `<h1>${data.title}</h1>
            <h3>Synopsis</h3>
            <p>${data.synopsis}</p>
            <h3>Credits</h3>`;

            data.team.forEach(teamElement => {
                pageInfo += `<h4>${teamElement.role}</h4>
                <ul style="list-style-type: none;">`;
                teamElement.credits.forEach(nameElement => {
                    pageInfo += `<li>${nameElement}</li>`
                });
                pageInfo += `</ul>`;
            });

            pageInfo += `<h3>Skills Used</h3>
            <ul>`
            data.skills.forEach(skill => {
                pageInfo += `<li>${skill}</li>`
            });
            pageInfo += `</ul>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Gallery</h3>
            <div class="gallery-container">`

            data.gallery.forEach(imageElement => {
                pageInfo += `<div class="gallery-image-container">
                <a href="/img/portfolio/${data.galleryFolder}/${imageElement.image}" target="_blank">
                <img class="gallery-image" src="/img/portfolio/${data.galleryFolder}/${imageElement.image}">
                </a>
                <p class="gallery-caption">${imageElement.caption}</p>
                </div>`
            });

            pageInfo += `</div>`

            infoContainer.innerHTML = pageInfo;
        });
}
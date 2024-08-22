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
            <div class="gallery-container">`;

            data.gallery.forEach(imageElement => {
                pageInfo += `<div class="gallery-image-container">`;

                let mediaPath = `/img/portfolio/projects/${data.galleryFolder}/${imageElement.media}`;

                let imgRegex = new RegExp(/\.(jpg|jpeg|png|webp|bmp|gif)$/i);
                let videoRegex = new RegExp(/\.(mp4|webm|ogg)$/i);

                if (imgRegex.test(imageElement.media))
                {
                    //Is image
                    pageInfo += `<a href="${mediaPath}" target="_blank">
                    <img class="gallery-image" src="${mediaPath}">
                    </a>`;
                }
                else if (videoRegex.test(imageElement.media))
                {
                    //Is video
                    let match = imageElement.media.match(videoRegex);
                    mediaExt = match[0].toLowerCase();
                    
                    mediaExt = mediaExt.replace('.', '');
                    mediaExt = mediaExt.replace(']', '');

                    pageInfo += `<video width="300" controls>
                                 <source src="${mediaPath}" type="video/${mediaExt}]">
                                 </video>`;
                }
                else
                {
                    console.error(`Invalid file type! ${imageElement.media}`);
                }
                
                pageInfo += `<p class="gallery-caption">${imageElement.caption}</p>
                </div>`;
            });

            pageInfo += `</div>`;

            infoContainer.innerHTML = pageInfo;
        });
}
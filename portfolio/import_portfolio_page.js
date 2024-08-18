function importInfo(fileName)
{
    const filePath = fileName + '.json';

    fetch(filePath)
        .then(response => response.json())
        .then(data => {

            //create about me section
            const infoContainer = document.querySelector('#info-container');
            
            let pageInfo = `<h1>${data.title}</h1>
            <h3>Synopsis</h3>
            <p>${data.synopsis}</p>`;

            infoContainer.innerHTML = pageInfo;
        });
}
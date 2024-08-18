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
                pageInfo += `<h4>${teamElement.role}</h4>`;
                data.team.credits.forEach(nameElement => {
                    pageInfo += `<li>${nameElement}</li>`
                });
            });

            infoContainer.innerHTML = pageInfo;
        });
}
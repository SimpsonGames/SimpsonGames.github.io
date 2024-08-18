function importInfo(fileName)
{
    fetch('the_patience_test.json')
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
            pageInfo += `</ul>`

            infoContainer.innerHTML = pageInfo;
        });
}
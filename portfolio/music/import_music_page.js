function importInfo(fileName)
{
    fetch(fileName)
        .then(response => response.json())
        .then(data => {

            //create about me section
            const infoContainer = document.querySelector('#music-info-container');
            
            let pageInfo = `<h1>${data.pageTitle}</h1>
            <h3>Synopsis</h3>
            <p>${data.pageDescription}</p>
            <h3>Music</h3>
            <table>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Music</th>
            </tr>`;

            data.music.forEach(musicElement => {
                pageInfo += `<tr><td>${musicElement.title}</td>
                <td>${musicElement.description}</td>
                <td>
                    <audio controls>
                        <source src="/audio/${data.musicFolder}/${musicElement.audioFile}" type="audio/ogg">"
                    </audio>
                </td></tr>`
            });

            pageInfo += `</table>`

            /* pageInfo += `<h3>Skills Used</h3>
            <ul>`
            data.skills.forEach(skill => {
                pageInfo += `<li>${skill}</li>`
            });
            pageInfo += `</ul>
            <h3>Experience</h3>
            <p>${data.experience}</p>`
 */
            infoContainer.innerHTML = pageInfo;
        });
}
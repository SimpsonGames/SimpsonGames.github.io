function importInfo(fileName)
{
    const filePath = `../portfolio/${fileName}.json`;

    fetch(filePath)
        .then(response => response.json())
        .then(data => {

            //create about me section
            const infoContainer = document.getElementById('info-container');
            
            let pageInfo = `<h1>${data.title}</h1>
            <h3>Synopsis</h3>
            <p>${data.synopsis}</p>`;

            infoContainer.innerHTML = pageInfo;
        });
}

document.addEventListener('DOMContentLoaded', () => { 
    var fileName = document.getElementById('info-container').value;
    importInfo(fileName);
});
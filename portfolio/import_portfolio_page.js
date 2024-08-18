function importInfo(fileName)
{
    const filePath = `${fileName}.json`;

    fetch(filePath)
        .then(response => response.json())
        .then(data => {

            //create about me section
            const infoContainer = document.getElementById('info-container');
            let info = data.info[0];
            
            let pageInfo = `<h1>${info.title}</h1>
            <h3>Synopsis</h3>
            <p>${info.synopsis}</p>`
        });
}

document.addEventListener('DOMContentLoaded', () => { 
    var fileName = document.getElementById('info-container').value;
    importInfo(fileName);
});
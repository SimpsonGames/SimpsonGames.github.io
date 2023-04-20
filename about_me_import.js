fetch('about_me.json')
    .then(response => response.json())
    .then(data => {

        //populate contents list
        const contentsContainer = document.querySelector('#contents-list');

        if (contentsContainer)
        {
            data.sections.forEach(section => {
                const contentsElement = document.createElement('li');
                
                contentsElement.innerHTML = `<a href="#${section.scrollID}">${section.title}</a>`;
            
                contentsContainer.appendChild(contentsElement);
            });
        }
        else
        {
            console.log('No element found with selector "#contents-menu"');
        }

    });
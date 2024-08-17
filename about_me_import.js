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

        //Populate page body
        const bodyContainer = document.querySelector('#about-content');

        if (bodyContainer)
        {
            data.sections.forEach(section => {
                const bodyElement = document.createElement('div');

                paragraphInfo = `<h1 id="${section.scrollID}">${section.title}</h1>
                <p>${section.body}</p>`;

                bodyElement.innerHTML = paragraphInfo;
                bodyContainer.appendChild(bodyElement);
            });
        }
        else
        {
            console.log('No element found with selector "#about-content"')
        }

    });
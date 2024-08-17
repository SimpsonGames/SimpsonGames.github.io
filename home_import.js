fetch('about_me.json')
    .then(response => response.json())
    .then(data => {

        //create about me section
        const aboutMeContainer = document.querySelector('#about-me-box');

        if (aboutMeContainer)
        {
            let firstElement = data.sections[0];
            const bodyElement = document.createElement('div');
            
            aboutMe = `<h1>${firstElement.title}</h1>
            <p>${firstElement.body}</p>
            <a href="/about_me"><button class="button">Read More</button></a>
            <hr></hr>`
            
            bodyElement.innerHTML = aboutMe;
            aboutMeContainer.appendChild(bodyElement);
        }
        else
        {
            console.log('No element found with selector "#about-me-box"');
        }

        //<h1 id="about-me-header"></h1>
        //    <p id="about-me-body"></p>
        //    <a href="/about_me"><button class="button">Read More</button></a>  
        //    <hr></hr>
    });
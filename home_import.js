fetch('about_me.json')
    .then(response => response.json())
    .then(data => {

        //create about me section
        const aboutMeContainer = document.querySelector('#about-me-box');

        if (aboutMeContainer)
        {
            aboutMeTitle = `<h1>"${data.sections[0].title}"</h1>`
            aboutMeContainer.appendChild(aboutMeTitle);

            aboutMeBody = `<p>"${data.sections[0].body}"</p>`
            aboutMeContainer.appendChild(aboutMeBody);

            aboutMeLink = `<a href="/about_me"><button class="button">Read More</button></a>`
            aboutMeContainer.appendChild(aboutMeLink);

            aboutMeContainer.appendChild(`<hr></hr>`);
        }
        else
        {
            console.log('No element found with selector "#contents-menu"');
        }

        //<h1 id="about-me-header"></h1>
        //    <p id="about-me-body"></p>
        //    <a href="/about_me"><button class="button">Read More</button></a>  
        //    <hr></hr>
    });
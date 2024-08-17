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
    });

fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {

        const featuredContainer = document.querySelector('#featured-portfolio');

        if (featuredContainer)
        {
            data.projects.forEach(project => {
                if (project.featured)
                {
                    const featuredElement = document.createElement('div');
                    featuredElement.classList.add('portfolio-panel');
        
                    let featuredInfo = `
                    <img class="panel-image" src="img/portfolio/panels/${project.image}" alt="${project.title}">
                    <h3>${project.title} (${project.date})</h3>
                    <p class="panel-desc">${project.description}</p>
                    `;
        
                    if (project.portfolioPage !== null && project.portfolioPage !== "#") 
                    {
                        featuredInfo += `<a href="portfolio/${project.portfolioPage}"><button class="button">Read More</button></>`;
                    }
        
                    if (project.externalPage !== null && project.externalPage !== "#")
                    {
                        featuredInfo += `<a href="${project.externalPage}" target="_blank"><button class="button">View Project Page</button></>`;
                    }
              
                    featuredElement.innerHTML = featuredInfo;
                    featuredContainer.appendChild(featuredElement);
                }
            });
        }
        else
        {
            console.log('No element found with selector #featured-portfolio')
        }

    });
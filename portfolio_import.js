fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Use the data to populate your website
    
    //Populate featured list
    const featuredContainer = document.querySelector('#featured-grid');
    
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

    
    //Populate projects container
    const projectsContainer = document.querySelector('#portfolio-grid');

    if (projectsContainer)
    {
      data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('portfolio-panel');

        let projectInfo = `
        <img class="panel-image" src="img/portfolio/panels/${project.image}" alt="${project.title}">
        <h3>${project.title} (${project.date})</h3>
        <p class="panel-desc">${project.description}</p>
      `;

        if (project.portfolioPage !== null && project.portfolioPage !== "#")
        {
          projectInfo += `<a href="${project.portfolioPage}"><button class="button">Read More</button></>`;
        }

        if (project.externalPage !== null && project.externalPage !== "#")
        {
          projectInfo += `<a href="${project.externalPage}" target="_blank"><button class="button">View Project Page</button></>`;
        }
      
        projectElement.innerHTML = projectInfo;
        projectsContainer.appendChild(projectElement);
      });
    }
    else
    {
      console.log('No element found with selector "#portfolio-grid"');
    }
  });

